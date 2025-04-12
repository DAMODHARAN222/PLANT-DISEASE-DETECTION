
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-plant-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-plant-300" />
            <span className="text-xl font-semibold text-white">PlantGuard</span>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="text-plant-200 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/scan" className="text-plant-200 hover:text-white transition-colors">
              Scan Plant
            </Link>
            <Link to="/history" className="text-plant-200 hover:text-white transition-colors">
              History
            </Link>
          </div>
        </div>
        <div className="border-t border-plant-700 pt-6 mt-6 text-center text-plant-300 text-sm">
          <p>© {new Date().getFullYear()} PlantGuard. All rights reserved.</p>
          <p className="mt-2">A demo application for plant disease detection.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
