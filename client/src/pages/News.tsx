import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNews } from "@/hooks/use-news";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";

export default function News() {
  const { data: news, isLoading } = useNews();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-display mb-4">LATEST NEWS</h1>
          <p className="text-gray-400">Keep up with the latest updates from ShardMC.</p>
        </div>

        {isLoading ? (
          <div className="text-center py-20 text-gray-500">Loading articles...</div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-12">
            {news?.map((item, i) => (
              <motion.article 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/20 transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60" />
                   <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>{new Date(item.date || Date.now()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-orange-500" />
                      <span className="text-white font-medium">{item.author}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold font-display mb-4 text-white group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h2>
                  
                  <div className="prose prose-invert prose-orange max-w-none text-gray-400">
                    <p>{item.content}</p>
                  </div>
                </div>
              </motion.article>
            ))}

            {!news?.length && (
              <div className="text-center py-20 bg-zinc-900/30 rounded-2xl border border-white/5 border-dashed">
                <p className="text-gray-500">No news articles found yet.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
