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

// Helper for copy IP
function CopyIpButton() {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("play.shardmc.net");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      onClick={handleCopy}
      className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 h-14 px-8 text-lg font-mono tracking-wide relative overflow-hidden group transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      <span className="mr-3">play.shardmc.net</span>
      {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-gray-400 group-hover:text-white" />}
    </Button>
  );
}

export default function Home() {
  const { data: stats } = useStats();
  const { data: news } = useNews();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash Minecraft-like landscape */}
          <img 
            src="https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          <ParticleBackground />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-orange-200 text-xs font-bold tracking-wider uppercase">Season 5 is Live</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black font-display tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl">
              SHARD<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">MC</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              The ultimate Lifesteal SMP experience. Build your base, hunt players, steal hearts, and dominate the server.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4 mb-16">
              <Button 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white h-14 px-10 text-lg font-bold rounded-lg shadow-lg shadow-orange-600/25 transition-all hover:scale-105"
              >
                JOIN THE SERVER
              </Button>
              <CopyIpButton />
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
              {[
                { label: "Online Players", value: stats?.onlinePlayers || "...", icon: Users },
                { label: "Server Uptime", value: stats?.uptime || "99.9%", icon: Clock },
                { label: "Registered", value: stats?.totalJoined || "...", icon: Server },
                { label: "Version", value: "1.20.4", icon: Zap },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-default group"
                >
                  <stat.icon className="w-6 h-6 text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold font-display text-white">{stat.value}</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-orange-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 relative bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              WHY CHOOSE <span className="text-orange-500">SHARD</span>?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We've crafted the perfect Lifesteal experience with custom features you won't find anywhere else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Lifesteal Mechanics", desc: "Kill players to steal their hearts. Lose all hearts and get banned.", icon: Heart },
              { title: "Custom Abilities", desc: "Unlock powerful skills and abilities to enhance your combat.", icon: Zap },
              { title: "Balanced Economy", desc: "Player-driven economy with auctions, trading, and shops.", icon: Shield },
              { title: "Team Wars", desc: "Form a clan and wage war against other teams for dominance.", icon: Sword },
              { title: "Anti-Cheat", desc: "Advanced cheat detection ensures a fair playing field for everyone.", icon: Shield },
              { title: "24/7 Uptime", desc: "Lag-free experience with top-tier hardware hosting.", icon: Server },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-orange-500/30 hover:bg-zinc-900 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="py-32 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold font-display mb-2">LATEST NEWS</h2>
              <p className="text-gray-400">Updates, announcements, and patch notes.</p>
            </div>
            <Link href="/news" className="text-orange-500 hover:text-orange-400 font-semibold transition-colors">
              View All News →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news?.slice(0, 3).map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-5 border border-white/5">
                  <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors z-10" />
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-white z-20 border border-white/10">
                    UPDATE
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors font-display line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {item.content}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="text-orange-500 font-semibold">{item.author}</span>
                  <span>•</span>
                  <span>{new Date(item.date || Date.now()).toLocaleDateString()}</span>
                </div>
              </motion.article>
            ))}
            
            {!news?.length && (
              <div className="col-span-3 text-center py-20 bg-zinc-900/30 rounded-2xl border border-white/5 border-dashed">
                <p className="text-gray-500">No news articles found.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DISCORD CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/20 to-[#5865F2]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-[#5865F2] rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-[#5865F2]/20 relative overflow-hidden group">
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                JOIN OUR DISCORD COMMUNITY
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Connect with thousands of other players, get support, participate in giveaways, and stay updated with the latest announcements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button className="bg-white text-[#5865F2] hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-xl shadow-lg">
                  Join Discord
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                  View Rules
                </Button>
              </div>
            </div>

            <div className="relative">
              {/* Discord Logo Icon if needed, or just visual balance */}
              <div className="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <svg viewBox="0 0 127 96" className="w-16 h-16 md:w-24 md:h-24 fill-white">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c1.24-23.28-5.83-47.5-23.29-71.86ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.25-12.74S95.81,46,95.7,53,90.94,65.69,84.69,65.69Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
