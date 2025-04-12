
import { Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-12 md:py-24">
      <div className="leaf-pattern absolute inset-0 opacity-20 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-2 bg-plant-100 rounded-full mb-4">
            <Leaf className="h-8 w-8 text-plant-500 animate-leaf-sway" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-plant-900 mb-6">
            Detect Plant Diseases With AI
          </h1>
          <p className="text-lg md:text-xl text-plant-700 mb-8">
            Upload a photo of your plant and our AI will analyze it for signs of disease. 
            Get instant results and treatment recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-plant-500 hover:bg-plant-600">
              <Link to="/scan">
                Scan Your Plant <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-plant-500 text-plant-700 hover:bg-plant-50">
              <Link to="/history">
                View History
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
