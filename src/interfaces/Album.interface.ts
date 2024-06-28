import { Song } from "./Song.interface";

export interface Album {
  id: number;
  title: string;
  albumCover: string;
  spotifyURL: string;
  releaseDate: string;
  composers: number[];
  tracks: Song[];
}

// Todas as datas estão no formato AAAA/MM/DD
