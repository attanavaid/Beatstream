import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistTopSongsQuery, useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useAppSelector(state => state.player);
  
  // @ts-expect-error id passed must be a string, but we don't call it when it isn't a string
  const { data: artistTopSongsData, isFetching: isFetchingArtistTopSongs, error } = useGetArtistTopSongsQuery(artistId, { skip: !artistId });
  // @ts-expect-error same as above.
  const { data: artistDetailsData, isFetching: isFetchingArtistDetails } = useGetArtistDetailsQuery(artistId, { skip: !artistId });

  if (isFetchingArtistTopSongs && isFetchingArtistDetails) return <Loader title="Loading artist details..."/>;
  if (error) return <Error/>;

  console.log();

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistDetailsData}
      />

      <RelatedSongs
        data={artistTopSongsData?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;