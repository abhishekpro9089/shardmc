
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  date: timestamp("date").defaultNow(),
  author: text("author").notNull(),
});

export const insertNewsSchema = createInsertSchema(news).omit({ id: true, date: true });

export type NewsItem = typeof news.$inferSelect;
export type InsertNews = z.infer<typeof insertNewsSchema>;

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: text("price").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(), // e.g. "VIP", "MVP", "LEGEND"
  features: text("features").array().notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;

// Types for the frontend to use for stats (fetched from backend/mocked)
export interface ServerStats {
  onlinePlayers: number;
  maxPlayers: number;
  uptime: string;
  totalJoined: number;
}
