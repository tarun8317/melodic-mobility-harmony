import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BottomNav } from "./components/BottomNav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Player from "./pages/Player";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <main className="min-h-screen bg-spotify-black text-spotify-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/player" element={<Player />} />
        </Routes>
        <BottomNav />
      </main>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;