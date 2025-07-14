import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HardHat, Building, Home } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-card border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <HardHat className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Labourlink</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Button>
            </Link>
            
            <Link to="/workers">
              <Button variant="outline" className="flex items-center space-x-2">
                <HardHat className="h-4 w-4" />
                <span>For Workers</span>
              </Button>
            </Link>
            
            <Link to="/contractors">
              <Button variant="default" className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span>For Contractors</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;