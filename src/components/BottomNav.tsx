import { Home, Search, Library, Music2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 glass-effect border-t border-spotify-darkgray bg-spotify-black">
      <nav className="flex justify-around items-center h-16 px-4 max-w-md mx-auto">
        <Link to="/" className={`flex flex-col items-center space-y-1 transition-all ${isActive("/") ? "text-spotify-green" : "text-spotify-lightgray"}`}>
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/search" className={`flex flex-col items-center space-y-1 transition-all ${isActive("/search") ? "text-spotify-green" : "text-spotify-lightgray"}`}>
          <Search size={24} />
          <span className="text-xs">Search</span>
        </Link>
        <Link to="/library" className={`flex flex-col items-center space-y-1 transition-all ${isActive("/library") ? "text-spotify-green" : "text-spotify-lightgray"}`}>
          <Library size={24} />
          <span className="text-xs">Library</span>
        </Link>
        <Link to="/player" className={`flex flex-col items-center space-y-1 transition-all ${isActive("/player") ? "text-spotify-green" : "text-spotify-lightgray"}`}>
          <Music2 size={24} />
          <span className="text-xs">Playing</span>
        </Link>
      </nav>
    </div>
  );
};