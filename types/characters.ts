//  type for the Debut object
export type Debut = {
  novel?: string;
  manga?: string;
  anime?: string;
  movie?: string;
  game?: string;
  ova?: string;
  appearsIn: string;
};

//  type for the Jutsu
export type Jutsu = {
  jutsuName: string;
};

//  type for Personal Attributes
export type Personal = {
  species?: string;
  status?: string;
  birthdate?: string;
  sex?: string;
  height?: Record<string, string>;
  weight?: Record<string, string>;
  bloodType?: string;
  occupation?: string | string[];
  affiliation?: string | string[];
  clan?: string;
  age?: Record<string, number>;
  kekkeiGenkai?: string;
  classification?: string;
  jinchūriki?: string[];
  titles?: string[];
  team?: string | string[];
  partner?: string;
};

//  type for Nature Types (in this case, different chakra releases)
export type NatureType = {
  nature: string[];
};

//  type for Family Relationships
export type Family = {
  father?: string;
  mother?: string;
  son?: string;
  daughter?: string;
  brother?: string;
  sister?: string;
  cousin?: string;
  nephew?: string;
  adoptiveFather?: string;
  adoptiveMother?: string;
  adoptiveSon?: string;
  adoptiveDaughter?: string;
};

//  type for Rank
export type Rank = {
  ninjaRank: Record<string, string>;
  ninjaRegistration?: string;
};

//  type for Tools
export type Tools = {
  tools: string[];
};

//  type for Voice Actors
export type VoiceActors = {
  japanese: string;
  english: string | string[];
};

// Main Character  type
export type Character = {
  id: number;
  name: string;
  images: string[];
  debut?: Debut;
  jutsu?: string[];
  personal?: Personal;
  uniqueTraits?: string[];
  natureType?: string[];
  family?: Family;
  rank?: Rank;
  tools?: string[];
  voiceActors?: VoiceActors;
};

//  type for the API Response
// export type ApiResponse {
//   characters: Character[];
//   currentPage: number;
//   pageSize: number;
//   totalCharacters: number;
// }
