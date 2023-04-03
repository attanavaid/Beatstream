import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TopChartsRootObject } from "../../interfaces/shazam-charts";
import { SongDetailsRootObject } from "../../interfaces/shazam-songDetails";
import { RelatedSongsRootObject } from "../../interfaces/shazam-relatedSongs";
import { ArtistTopSongsRootObject } from "../../interfaces/shazam-artistTopSongs";
import { ArtistDetailsRootObject } from "../../interfaces/shazam-artistDetails";
import { SearchRootObject } from "../../interfaces/shazam-search";

export const shazamAPI = createApi({
    reducerPath: "shazamAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", import.meta.env.VITE_SHAZAM_RAPID_API_KEY);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopChartsUS: builder.query<TopChartsRootObject, string>({ query: () => "/charts/track" }),
        getSongDetails: builder.query<SongDetailsRootObject, string>({ query: (song_key) => `/songs/get-details?key=${song_key}` }),
        getSongRelated: builder.query<RelatedSongsRootObject, string>({ query: (song_key) => `/songs/list-recommendations?key=${song_key}` }),
        getArtistTopSongs: builder.query<ArtistTopSongsRootObject, string>({ query: (artist_id) => `/artists/get-top-songs?id=${artist_id}` }),
        getArtistDetails: builder.query<ArtistDetailsRootObject, string>({ query: (artist_id) => `/artists/get-details?id=${artist_id}` }),
        getSongsBySearch: builder.query<SearchRootObject, string>({ query: (term) => `/search?term=${term}` }),
    }),
});

export const { 
    useGetTopChartsUSQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistTopSongsQuery,
    useGetArtistDetailsQuery,
    useGetSongsBySearchQuery
} = shazamAPI;