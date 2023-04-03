import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { Track } from "../interfaces/shazam-charts";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useAppDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useAppSelector(state => state.player);

  // The queries below will produce a typescript error without the ts-expect-error:
  // Argument of type "number | undefined" is not assignable to parameter of type "number | unique symbol".
  // Type "undefined" is not assignable to type "number | unique symbol".

  // @ts-expect-error id passed must be a string, but we don't call it when it isn't a string
  const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery(songid, { skip: !songid });
  // @ts-expect-error same reason as above comment
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid, { skip: !songid });

  if (isFetchingSongDetails && isFetchinRelatedSongs) return <Loader title="Searching song details"/>;
  if (error) return <Error/>;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song: Track, i: number) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        songData={songData}
      />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">
          Lyrics:
        </h2>

        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? songData?.sections[1]?.text?.map((line: string, i: number) => (
            <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">
              {line}
            </p>
          )) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, No lyrics found!
            </p>
          )}
        </div>
        
      </div>
      
      {JSON.stringify(data) === "{}" ? <></> : 
        <RelatedSongs
          data={data?.tracks}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      }
    </div>
  );
};

export default SongDetails;