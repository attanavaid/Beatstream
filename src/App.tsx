import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom"
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import { ArtistDetails, TopArtists, Discover, About, Search, SongDetails } from "./pages";

const App = () => {
  const { activeSong } = useSelector((state: any) => state.player);

  return (
    <div className="relative flex">
      <Sidebar/>
      <div className="flex-1 flex flex-col bg-gradient-to-r from-black from-10% via-red-800 via-30% to-pink-900 to-90%">
        <Searchbar/>

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <main className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover/>}/>
              <Route path="/top-artists" element={<TopArtists/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/artists/:id" element={<ArtistDetails/>}/>
              <Route path="/songs/:songid" element={<SongDetails/>}/>
              <Route path="/search/:searchTerm" element={<Search/>}/>
            </Routes>
          </main>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay/>
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#802a2a] backdrop-blur-lg rounded-xl z-10 m-3">
          <MusicPlayer/>
        </div>
      )}
    </div>
  );
};

export default App;