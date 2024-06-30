import { BandMember } from "./BandMember.interface";
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

export interface AlbumFromDB {
  id: number;
  title: string;
  albumCover: string;
  spotifyURL: string;
  releaseDate: string;
  tracks: Song[];
  composers: Composer[];
}

type Composer = {
  bandMemberId: number;
  albumId: number;
  bandMember: BandMember;
};

// Todas as datas no JSON estão no formato "AAAA/MM/DD"
// Todas as datas no DB estão no formato "AAAA-MM-DDT00:00:00.000Z"
