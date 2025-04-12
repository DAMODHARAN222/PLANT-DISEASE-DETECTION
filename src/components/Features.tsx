
import { Camera, Search, FileCheck, Heart } from "lucide-react";

const features = [
  {
    icon: <Camera className="h-10 w-10 text-plant-500" />,
    title: "Quick Scanning",
    description: "Take or upload a photo of your plant and get results in seconds."
  },
  {
    icon: <Search className="h-10 w-10 text-plant-500" />,
    title: "Accurate Detection",
    description: "Our AI recognizes a wide range of common plant diseases and disorders."
  },
  {
    icon: <FileCheck className="h-10 w-10 text-plant-500" />,
    title: "Treatment Advice",
    description: "Receive customized recommendations based on the detected disease."
  },
  {
    icon: <Heart className="h-10 w-10 text-plant-500" />,
    title: "Plant Health Tracking",
    description: "Keep a history of your plant's health over time."
  }
];

const Features = () => {
  return (
    <div className="py-16 bg-plant-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-plant-800 mb-12">
          How PlantGuard Helps You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-plant-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-plant-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-plant-700 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-plant-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
