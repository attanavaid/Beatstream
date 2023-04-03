import { TopChartsRootObject, Track } from "shazam-charts";
import { ArtistTopSongsRootObject, ArtistTopSongsDatum } from "shazam-artistTopSongs";
import { ArtistDetailsRootObject, ArtistDetailsDatum } from "shazam-artistDetails";

export interface ArtistCardProps {
    track: Track
}

export interface DetailsHeaderProps {
    artistId?: string,
    artistData?: ArtistDetailsDatum,
    songData?: Track
}

export interface NavLinkProps {
    handleClick?: () => void
}

export interface RelatedSongsProps {
    data?: Track[] | ArtistTopSongsDatum[],
    artistId?: string,
    isPlaying: boolean,
    activeSong: Track,
    handlePauseClick?: () => void,
    handlePlayClick?: (song: Track | ArtistTopSongsDatum, i: number) => void
}

export interface PlayPauseProps {
    isPlaying: boolean,
    activeSong: Track,
    song: Track,
    handlePause?: () => void,
    handlePlay?: (song: Track, i: number) => void
}

export interface SongCardProps {
    song: Track,
    isPlaying: boolean,
    activeSong: Track,
    data: TopChartsRootObject,
    i: number
}

export interface SongBarProps {
    song: Track,
    i: number,
    artistId?: string,
    isActive?: boolean,
    isPlaying: boolean,
    activeSong: Track,
    handlePauseClick?: () => void,
    handlePlayClick: (song: Track, i: number) => void
}

export interface TopChartCardProps {
    song: Track,
    i: number,
    isPlaying: boolean,
    activeSong: Track,
    handlePauseClick: () => void,
    handlePlayClick: (song: Track, i: number) => void
}