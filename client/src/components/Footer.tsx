import { Link } from "wouter";
import { Twitter, Youtube, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-bold font-display text-white">
                SHARD<span className="text-orange-500">MC</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The ultimate Minecraft Lifesteal network. Join thousands of players in an epic battle for survival and dominance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#5865F2] hover:text-white transition-all duration-300">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold font-display mb-6">Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/store" className="hover:text-orange-500 transition-colors">Store</Link></li>
              <li><Link href="/vote" className="hover:text-orange-500 transition-colors">Vote</Link></li>
              <li><Link href="/bans" className="hover:text-orange-500 transition-colors">Bans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-display mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Submit Ticket</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-display mb-6">Server Status</h4>
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">Status</span>
                <span className="flex items-center gap-1.5 text-green-500 text-xs font-bold bg-green-500/10 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  ONLINE
                </span>
              </div>
              <p className="text-white font-mono text-sm mb-1">play.shardmc.net</p>
              <p className="text-gray-500 text-xs">Version 1.20.4+</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2024 ShardMC Network. Not affiliated with Mojang AB.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-600 text-xs font-mono">DESIGNED BY REPLIT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
