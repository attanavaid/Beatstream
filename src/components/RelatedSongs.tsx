import SongBar from "./SongBar";
import { RelatedSongsProps } from "../interfaces/components";
import { Track } from "../interfaces/shazam-charts";
import { ArtistTopSongsRootObject } from "../interfaces/shazam-artistTopSongs";

const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }: RelatedSongsProps) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">
      Related Songs:
    </h1>

    <div className="mt-6 w-full flex flex-col">
      {data?.map((song: Track | ArtistTopSongsRootObject, i: number) => (
        <SongBar
          key={`${artistId}-${i}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          // @ts-ignore
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;