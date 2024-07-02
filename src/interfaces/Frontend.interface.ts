// Interfaces Comuns
interface Navigation {
  prev: string | null;
  next: string | null;
}

interface AlbumBase {
  id: number;
  title: string;
  albumCover: string;
  spotifyURL: string;
  releaseDate: string;
}

interface SongBase {
  id: number;
  discTrack: string;
  title: string;
}

interface SongMedium extends SongBase {
  albumId: number;
  duration: number;
  lyrics: string;
  spotifyURL: string;
  officialMusicVideo: string;
}

interface Song extends SongMedium {
  album: {
    title: string;
  };
}

interface BandMemberBase {
  id: number;
  name: string;
  artisticName: string;
  birthDate: string;
  deathDate: string | null;
  memberSince: string;
  bandDepartureDate: string | null;
  instagram: string;
}

interface Composer {
  bandMemberId: number;
  bandMember: BandMemberBase;
}

interface ComposerAlbum extends Composer {
  albumId: number;
}

interface ComposerSong extends Composer {
  songId: number;
}

// Endpoints

// Get All Members
export type GetAllMembers = BandMemberBase[];

// Get Member By ID and Get Member By Name
export interface GetMember extends BandMemberBase {
  albums: {
    album: AlbumBase & {
      tracks: SongBase[];
    };
  }[];
}

// Get All Albuns
export interface GetAllAlbuns {
  navigation: Navigation;
  data: (AlbumBase & {
    tracks: SongBase[];
    composers: ComposerAlbum[];
  })[];
}

// Get Album By ID
export interface GetAlbumById extends AlbumBase {
  tracks: SongMedium[];
  composers: ComposerAlbum[];
}

// Get Album By Name
export type GetAlbumByName = (AlbumBase & {
  tracks: SongBase[];
  composers: ComposerAlbum[];
})[];

// Get All Songs
export interface GetAllSongs {
  navigation: Navigation;
  data: Song[];
}

// Get Song By ID and Get Random Song
export interface GetSongById extends SongMedium {
  album: AlbumBase;
  composers: ComposerSong[];
}

// Get Songs by Name
export type GetSongsByName = GetSongById[];

// Get Songs By Album Title
export type GetSongsByAlbumTitle = GetAlbumByName;
