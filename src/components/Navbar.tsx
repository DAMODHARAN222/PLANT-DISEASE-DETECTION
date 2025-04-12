
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-plant-500 animate-leaf-sway" />
          <span className="font-semibold text-xl text-plant-700">PlantGuard</span>
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-plant-700 hover:text-plant-500 transition-colors">
            Home
          </Link>
          <Link to="/scan" className="text-plant-700 hover:text-plant-500 transition-colors">
            Scan Plant
          </Link>
          <Link to="/history" className="text-plant-700 hover:text-plant-500 transition-colors">
            History
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
