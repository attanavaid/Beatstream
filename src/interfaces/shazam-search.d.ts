export interface SearchRootObject {
    artists: Artists;
    tracks:  Tracks;
}

export interface Artists {
    hits: ArtistsHit[];
}

export interface ArtistsHit {
    artist: HitArtist;
}

export interface HitArtist {
    adamid:   string;
    avatar:   string;
    name:     string;
    verified: boolean;
    weburl:   string;
}

export interface Tracks {
    hits: TracksHit[];
}

export interface TracksHit {
    snippet?: string;
    track:    Track;
}

export interface Track {
    artists:  ArtistElement[];
    hub:      Hub;
    images:   TrackImages;
    key:      string;
    layout:   string;
    share:    Share;
    subtitle: string;
    title:    string;
    type:     string;
    url:      string;
}

export interface ArtistElement {
    adamid: string;
    id:     string;
}

export interface Hub {
    actions:     Action[];
    displayname: string;
    explicit:    boolean;
    image:       string;
    options:     Option[];
    providers:   Provider[];
    type:        string;
}

export interface Action {
    id?:   string;
    name?: Name;
    type:  Type;
    uri?:  string;
}

export enum Name {
    Apple = "apple",
    HubApplemusicDeeplink = "hub:applemusic:deeplink",
    HubDeezerSearchdeeplink = "hub:deezer:searchdeeplink",
    HubSpotifySearchdeeplink = "hub:spotify:searchdeeplink",
}

export enum Type {
    Applemusicopen = "applemusicopen",
    Applemusicplay = "applemusicplay",
    URI = "uri",
}

export interface Option {
    actions:             Action[];
    beacondata:          Beacondata;
    caption:             string;
    colouroverflowimage: boolean;
    image:               string;
    listcaption:         string;
    overflowimage:       string;
    providername:        string;
    type:                string;
}

export interface Beacondata {
    providername: string;
    type:         string;
}

export interface Provider {
    actions: Action[];
    caption: string;
    images:  ProviderImages;
    type:    string;
}

export interface ProviderImages {
    default:  string;
    overflow: string;
}

export interface TrackImages {
    background: string;
    coverart:   string;
    coverarthq: string;
    joecolor:   string;
}

export interface Share {
    avatar?:  string;
    href:     string;
    html:     string;
    image:    string;
    snapchat: string;
    subject:  string;
    text:     string;
    twitter:  string;
}