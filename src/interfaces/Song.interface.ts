export interface Song {
  id: number;
  discTrack: string;
  title: string;
  duration: number;
  lyrics: string;
  spotifyURL: string;
  officialMusicVideo: string | null;
  composers: number[];
}
