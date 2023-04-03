import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsUSQuery } from "../redux/services/shazamCore";
import { useAppSelector } from "../redux/hooks";

const Discover = () => {
    const { activeSong, isPlaying } = useAppSelector(state => state.player);
    const { data, isFetching, error } = useGetTopChartsUSQuery("");

    if (isFetching) return <Loader title="Loading songs..."/>;
    if (error) return <Error/>;

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
            <h2 className="font-bold text-3xl text-white text-left">
                Discover
            </h2>
          </div>
    
          <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.tracks.map((song, i) => (
                <SongCard
                    key={song.key}
                    song={song}
                    data={data}
                    i={i}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                />
            ))}
          </div>
        </div>
    );
};

export default Discover;