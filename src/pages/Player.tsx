import { Volume2, SkipBack, Play, SkipForward, Heart } from "lucide-react";
import { useState } from "react";

const Player = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-darkgray to-spotify-black pb-20">
      <div className="p-6 animate-fadeIn">
        <div className="aspect-square w-full max-w-sm mx-auto mb-8 rounded-lg overflow-hidden shadow-2xl">
          <img
            src="https://picsum.photos/500/500"
            alt="Album cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-sm mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-xl font-bold mb-1">Shape of You</h1>
              <p className="text-spotify-lightgray">Ed Sheeran</p>
            </div>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`transition-colors ${isLiked ? 'text-spotify-green' : 'text-spotify-lightgray'}`}
            >
              <Heart className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-8">
            <div className="relative w-full h-1 bg-spotify-darkgray rounded-full">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-spotify-green rounded-full" />
            </div>
            <div className="flex justify-between mt-2 text-xs text-spotify-lightgray">
              <span>1:23</span>
              <span>3:45</span>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-8">
            <button className="text-spotify-lightgray hover:text-spotify-white transition-colors">
              <SkipBack className="w-8 h-8" />
            </button>
            <button className="w-16 h-16 rounded-full bg-spotify-green text-spotify-black flex items-center justify-center hover:scale-105 transition-transform">
              <Play className="w-8 h-8" />
            </button>
            <button className="text-spotify-lightgray hover:text-spotify-white transition-colors">
              <SkipForward className="w-8 h-8" />
            </button>
          </div>

          <div className="flex items-center space-x-2 mt-8">
            <Volume2 className="w-5 h-5 text-spotify-lightgray" />
            <div className="flex-1 h-1 bg-spotify-darkgray rounded-full">
              <div className="h-full w-1/2 bg-spotify-green rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;