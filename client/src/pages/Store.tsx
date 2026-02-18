import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useProducts } from "@/hooks/use-products";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

export default function Store() {
  const { data: products, isLoading } = useProducts();

  // Mock data if API is empty for visual demo
  const displayProducts = products?.length ? products : [
    {
      id: 1,
      name: "VIP Rank",
      price: "$9.99",
      category: "RANK",
      features: ["Prefix in Chat", "Fly in Lobby", "2x Vote Rewards", "Reserve Slot"],
      image: "",
    },
    {
      id: 2,
      name: "MVP Rank",
      price: "$24.99",
      category: "RANK",
      features: ["All VIP Features", "Color Chat", "Keep XP on Death", "Access to /feed"],
      image: "",
    },
    {
      id: 3,
      name: "LEGEND Rank",
      price: "$49.99",
      category: "RANK",
      features: ["All MVP Features", "Custom Nickname", "Access to /fly", "Priority Support", "Special Particle Trail"],
      image: "",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-display mb-4">SERVER STORE</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Support the server and get amazing rewards. All purchases go directly towards server hosting and development.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-20">Loading store items...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayProducts.map((product, i) => {
              const isPopular = i === 1; // Middle one is popular
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-2xl p-8 border transition-all duration-300 flex flex-col ${
                    isPopular 
                      ? "bg-gradient-to-b from-orange-900/20 to-black border-orange-500/50 shadow-2xl shadow-orange-500/10 scale-105 z-10" 
                      : "bg-zinc-900/30 border-white/10 hover:border-white/20"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      isPopular ? "bg-orange-500/20 text-orange-500" : "bg-white/5 text-gray-400"
                    }`}>
                      {i === 2 ? <Crown className="w-8 h-8" /> : i === 1 ? <Star className="w-8 h-8" /> : <Zap className="w-8 h-8" />}
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-2">{product.name}</h3>
                    <div className="text-3xl font-bold text-white">
                      {product.price}
                      <span className="text-sm font-normal text-gray-500 ml-1">/ lifetime</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full py-6 font-bold tracking-wide ${
                      isPopular 
                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20" 
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    ADD TO CART
                  </Button>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
