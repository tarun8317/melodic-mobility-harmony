const RECENT_PLAYS = [
  {
    id: 1,
    title: "Liked Songs",
    type: "Playlist",
    imageUrl: "https://picsum.photos/404/400",
  },
  {
    id: 2,
    title: "Daily Mix 1",
    type: "Made for you",
    imageUrl: "https://picsum.photos/405/400",
  },
  {
    id: 3,
    title: "Discover Weekly",
    type: "Playlist",
    imageUrl: "https://picsum.photos/406/400",
  },
];

const Library = () => {
  return (
    <div className="min-h-screen pb-20 bg-spotify-black">
      <div className="p-6 animate-fadeIn">
        <h1 className="text-2xl font-bold mb-4">Your Library</h1>
        
        <div className="space-y-4">
          {RECENT_PLAYS.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 p-2 rounded-lg hover:bg-spotify-darkgray transition-all cursor-pointer animate-scaleIn"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-12 h-12 rounded object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-spotify-lightgray">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;