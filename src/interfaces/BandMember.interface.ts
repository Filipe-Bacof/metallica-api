export interface BandMember {
  id: number;
  name: string;
  artisticName: string;
  birthDate: string;
  deathDate: string | null;
  memberSince: string;
  bandDepartureDate: string | null;
  instagram: string;
}

// Todas as datas estão no formato AAAA/MM/DD
