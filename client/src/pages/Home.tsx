import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Users, Server, Clock, Shield, Sword, Zap, Heart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useStats } from "@/hooks/use-stats";
import { useNews } from "@/hooks/use-news";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const { data: stats } = useStats();
  const { data: news } = useNews();
  const [copied, setCopied] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          <ParticleBackground />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center relative"
          >

            {/* Lava Glow */}
            <div className="absolute w-[600px] h-[600px] bg-orange-600/20 blur-[160px] rounded-full -z-10 animate-pulse" />

            {/* Floating Logo */}
            <motion.img
              src="/Fire_Mc_Logo_By_SoloPlayz_1.webp"
              alt="ShardMC Logo"
              initial={{ opacity: 0, scale: 0.7, y: -80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="mx-auto mb-12 
                         w-[260px] sm:w-[360px] md:w-[460px] 
                         drop-shadow-[0_0_140px_rgba(255,70,0,1)] 
                         hover:scale-110 
                         transition-all duration-500"
              style={{ animation: "float 4s ease-in-out infinite" }}
            />

            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 mb-8 backdrop-blur-md shadow-lg shadow-orange-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-orange-200 text-xs font-bold tracking-wider uppercase">
                Season 5 is Live
              </span>
            </div>

            {/* Animated Title */}
            <h1 className="text-7xl md:text-9xl font-black font-display tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-300 to-red-500 animate-gradient-x drop-shadow-[0_0_40px_rgba(255,100,0,0.6)]">
              SHARD<span className="text-orange-500">MC</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
              The ultimate Lifesteal SMP experience. Build your base, hunt players,
              steal hearts, and dominate the server.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
              <Button 
                onClick={() => window.open("https://discord.gg/ShardMC", "_blank")}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white h-14 px-10 text-lg font-bold rounded-lg shadow-lg shadow-orange-600/25 transition-all hover:scale-105"
              >
                JOIN THE SERVER
              </Button>

              <Button 
                onClick={() => window.open("https://discord.gg/ShardMC", "_blank")}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 h-14 px-10 text-lg font-bold rounded-lg backdrop-blur-sm"
              >
                JOIN DISCORD
              </Button>
            </div>

            {/* Server Info */}
            <div className="bg-black/40 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-6 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 animate-pulse" />
              <div className="relative z-10 space-y-4">
                <div>
                  <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Java Edition</div>
                  <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                    <span className="font-mono text-white text-lg">play.shardmc.fun</span>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText("play.shardmc.fun");
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="p-2 hover:bg-white/10 rounded-md transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
                    </button>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">
                    Bedrock Edition
                  </div>
                  <div className="text-gray-300 font-mono text-sm">
                    IP: play.shardmc.fun | Port: 19130
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
