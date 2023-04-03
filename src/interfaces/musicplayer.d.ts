import { RootObject, Track } from "shazam-charts";

export interface ControlsProps {
    isActive?: boolean,
    isPlaying: boolean,
    repeat: boolean,
    setRepeat: Dispatch<SetStateAction<boolean>>,
    shuffle: boolean,
    setShuffle: Dispatch<SetStateAction<boolean>>,
    currentSongs: Array<any>,
    handlePlayPause: VoidFunction,
    handlePrevSong: VoidFunction,
    handleNextSong: VoidFunction
}

export interface PlayerProps {
    activeSong: Track,
    isPlaying: boolean,
    volume: number,
    seekTime: number,
    onEnded: React.ReactEventHandler<HTMLAudioElement>,
    onTimeUpdate: React.ReactEventHandler<HTMLAudioElement>,
    onLoadedData: React.ReactEventHandler<HTMLAudioElement>,
    repeat: boolean,
    currentIndex?: number
}

export interface SeekbarProps {
    value: number,
    min: string | number,
    max: string | number,
    onInput: React.FormEventHandler<HTMLInputElement>,
    setSeekTime: Dispatch<SetStateAction<number>>,
    appTime: number
}

export interface TrackProps {
    activeSong: Track,
    isActive?: boolean,
    isPlaying: boolean
}

export interface VolumeBarProps {
    value: number,
    min: string | number,
    max: string | number,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    setVolume: Dispatch<SetStateAction<number>>
}