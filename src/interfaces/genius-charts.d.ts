export interface RootObject {
    chart_items: ChartItem[];
    next_page:   number;
}

export interface ChartItem {
    _type: PurpleType;
    item:  Item;
    type:  Type;
}

export enum PurpleType {
    ChartItem = "chart_item",
}

export interface Item {
    _type:                                           Type;
    annotation_count:                                number;
    api_path:                                        string;
    artist_names:                                    string;
    featured_artists:                                Artist[];
    full_title:                                      string;
    header_image_thumbnail_url:                      string;
    header_image_url:                                string;
    id:                                              number;
    instrumental:                                    boolean;
    language:                                        Language;
    lyrics_owner_id:                                 number;
    lyrics_state:                                    LyricsState;
    lyrics_updated_at:                               number;
    path:                                            string;
    primary_artist:                                  Artist;
    pyongs_count:                                    number;
    relationships_index_url:                         string;
    release_date_components:                         ReleaseDateComponents;
    release_date_for_display:                        ReleaseDateForDisplay;
    release_date_with_abbreviated_month_for_display: ReleaseDateWithAbbreviatedMonthForDisplay;
    song_art_image_thumbnail_url:                    string;
    song_art_image_url:                              string;
    stats:                                           Stats;
    title:                                           string;
    title_with_featured:                             string;
    updated_by_human_at:                             number;
    url:                                             string;
}

export enum Type {
    Song = "song",
}

export interface Artist {
    _type:            PrimaryArtistType;
    api_path:         string;
    header_image_url: string;
    id:               number;
    image_url:        string;
    index_character:  string;
    iq?:              number;
    is_meme_verified: boolean;
    is_verified:      boolean;
    name:             string;
    slug:             string;
    url:              string;
}

export enum PrimaryArtistType {
    Artist = "artist",
}

export enum Language {
    En = "en",
    Es = "es",
    Ko = "ko",
}

export enum LyricsState {
    Complete = "complete",
}

export interface ReleaseDateComponents {
    day:   number;
    month: number;
    year:  number;
}

export enum ReleaseDateForDisplay {
    December232022 = "December 23, 2022",
    March242023 = "March 24, 2023",
}

export enum ReleaseDateWithAbbreviatedMonthForDisplay {
    DEC232022 = "Dec. 23, 2022",
    Mar242023 = "Mar. 24, 2023",
}

export interface Stats {
    concurrents?:           number;
    hot:                    boolean;
    pageviews:              number;
    unreviewed_annotations: number;
}