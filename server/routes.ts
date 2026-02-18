
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.news.list.path, async (req, res) => {
    const news = await storage.getNews();
    res.json(news);
  });

  app.get(api.news.get.path, async (req, res) => {
    const news = await storage.getNewsItem(Number(req.params.id));
    if (!news) {
      return res.status(404).json({ message: "News item not found" });
    }
    res.json(news);
  });

  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.stats.get.path, async (req, res) => {
    // Mock stats for now, could integrate with a Minecraft query library later
    res.json({
      onlinePlayers: 247,
      maxPlayers: 500,
      uptime: "99.9%",
      totalJoined: 50234
    });
  });

  // Seed data function
  const seed = async () => {
    const existingNews = await storage.getNews();
    if (existingNews.length === 0) {
      await storage.createNews({
        title: "Season 5: The Awakening",
        content: "Get ready for the biggest update in ShardMC history! New bosses, new items, and a completely revamped map.",
        imageUrl: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2800&auto=format&fit=crop",
        author: "Admin"
      });
      await storage.createNews({
        title: "Staff Applications Open",
        content: "We are looking for dedicated players to join our staff team. Apply on Discord today!",
        imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
        author: "Manager"
      });
      await storage.createNews({
        title: "Weekly Tournament Winners",
        content: "Congratulations to Team Alpha for winning this week's PvP tournament!",
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop",
        author: "Mod"
      });
    }

    const existingProducts = await storage.getProducts();
    if (existingProducts.length === 0) {
      await storage.createProduct({
        name: "VIP Rank",
        price: "$5.00",
        image: "https://images.unsplash.com/photo-1611637576109-b6f95185ea9b?q=80&w=2670&auto=format&fit=crop",
        category: "VIP",
        features: ["Priority Queue", "Chat Color", "1x Kit Key"]
      });
      await storage.createProduct({
        name: "MVP Rank",
        price: "$15.00",
        image: "https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?q=80&w=2670&auto=format&fit=crop",
        category: "MVP",
        features: ["All VIP Perks", "Fly in Lobby", "3x Kit Keys", "MVP Tag"]
      });
      await storage.createProduct({
        name: "LEGEND Rank",
        price: "$30.00",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
        category: "LEGEND",
        features: ["All MVP Perks", "/nick command", "5x Kit Keys", "Legend Tag", "Private Vault"]
      });
    }
  };
  
  seed();

  return httpServer;
}
