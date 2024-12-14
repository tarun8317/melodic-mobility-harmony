import { PlaylistCard } from "@/components/PlaylistCard";
import { useNavigate } from "react-router-dom";

const FEATURED_PLAYLISTS = [
  {
    id: 1,
    title: "Today's Top Hits",
    description: "Jung Kook is on top of the Hottest 50!",
    imageUrl: "https://picsum.photos/400/400",
  },
  {
    id: 2,
    title: "RapCaviar",
    description: "New music from Drake, Travis Scott and more",
    imageUrl: "https://picsum.photos/401/400",
  },
  {
    id: 3,
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s",
    imageUrl: "https://picsum.photos/402/400",
  },
  {
    id: 4,
    title: "Rock Classics",
    description: "Rock legends & epic songs",
    imageUrl: "https://picsum.photos/403/400",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-spotify-darkgray to-spotify-black">
      <header className="p-6 animate-fadeIn">
        <h1 className="text-2xl font-bold mb-1">Good evening</h1>
        <p className="text-spotify-lightgray">Welcome back</p>
      </header>

      <section className="px-6">
        <h2 className="text-xl font-bold mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-2 gap-4">
          {FEATURED_PLAYLISTS.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              {...playlist}
              onClick={() => navigate(`/player`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;