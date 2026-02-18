import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-4">
        <div className="w-24 h-24 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-orange-500/20">
          <AlertTriangle className="w-12 h-12 text-orange-500" />
        </div>
        
        <h1 className="text-7xl font-bold font-display text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-8">Page Not Found</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-10">
          The chunk you are looking for has not been generated or was corrupted by a creeper.
        </p>

        <Link href="/">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl">
            Return to Spawn
          </Button>
        </Link>
      </div>
    </div>
  );
}
