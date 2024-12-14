import { Search as SearchIcon } from "lucide-react";

const CATEGORIES = [
  { id: 1, name: "Pop", color: "bg-pink-500" },
  { id: 2, name: "Hip-Hop", color: "bg-green-500" },
  { id: 3, name: "Rock", color: "bg-purple-500" },
  { id: 4, name: "Electronic", color: "bg-orange-500" },
  { id: 5, name: "Jazz", color: "bg-blue-500" },
  { id: 6, name: "Classical", color: "bg-red-500" },
];

const Search = () => {
  return (
    <div className="min-h-screen pb-20 bg-spotify-black">
      <div className="p-6 animate-fadeIn">
        <h1 className="text-2xl font-bold mb-4">Search</h1>
        
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-lightgray" size={20} />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="w-full h-12 pl-10 pr-4 rounded-full bg-spotify-darkgray text-spotify-white placeholder-spotify-lightgray focus:outline-none focus:ring-2 focus:ring-spotify-green transition-all"
          />
        </div>

        <h2 className="text-xl font-bold mb-4">Browse All</h2>
        <div className="grid grid-cols-2 gap-4">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className={`${category.color} h-24 rounded-lg flex items-center justify-center p-4 cursor-pointer transition-transform hover:scale-105 animate-scaleIn`}
            >
              <span className="text-lg font-bold text-white text-shadow">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;