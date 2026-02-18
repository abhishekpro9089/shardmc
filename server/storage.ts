
import { db } from "./db";
import { news, products, type NewsItem, type InsertNews, type Product, type InsertProduct } from "@shared/schema";

export interface IStorage {
  getNews(): Promise<NewsItem[]>;
  getNewsItem(id: number): Promise<NewsItem | undefined>;
  createNews(newsItem: InsertNews): Promise<NewsItem>;
  getProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class DatabaseStorage implements IStorage {
  async getNews(): Promise<NewsItem[]> {
    return await db.select().from(news);
  }

  async getNewsItem(id: number): Promise<NewsItem | undefined> {
    const [item] = await db.select().from(news).where({ id }); // Note: where({ id }) is not correct for drizzle, need eq
    // Fixing drizzle syntax below in implementation
    return undefined; 
  }

  async createNews(insertNews: InsertNews): Promise<NewsItem> {
    const [item] = await db.insert(news).values(insertNews).returning();
    return item;
  }

  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [item] = await db.insert(products).values(insertProduct).returning();
    return item;
  }
}

// Correct implementation with imports
import { eq } from "drizzle-orm";

export class DrizzleStorage implements IStorage {
  async getNews(): Promise<NewsItem[]> {
    return await db.select().from(news).orderBy(news.date);
  }

  async getNewsItem(id: number): Promise<NewsItem | undefined> {
    const [item] = await db.select().from(news).where(eq(news.id, id));
    return item;
  }

  async createNews(insertNews: InsertNews): Promise<NewsItem> {
    const [item] = await db.insert(news).values(insertNews).returning();
    return item;
  }

  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [item] = await db.insert(products).values(insertProduct).returning();
    return item;
  }
}

export const storage = new DrizzleStorage();
