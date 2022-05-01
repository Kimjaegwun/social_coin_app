import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Join: undefined;
  Detail: {
    symbol: string;
    id: string;
  };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;

export type JoinScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Join"
>;

export type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Detail"
>;

export type CoinType = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
};

export interface CoinDetailType {
  id: string;
  name: string;
  symbol: string;
  parent: Parent;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  tags: Tag[];
  team: Team[];
  description: string;
  message: string;
  open_source: boolean;
  hardware_wallet: boolean;
  started_at: string;
  development_status: string;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  contract: string;
  platform: string;
  contracts: Contract[];
  links: Links;
  links_extended: LinksExtended[];
  whitepaper: Whitepaper;
  first_data_at: string;
  last_data_at: string;
}

export interface Parent {
  id: string;
  name: string;
  symbol: string;
}

export interface Tag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

export interface Team {
  id: string;
  name: string;
  position: string;
}

export interface Contract {
  contract: string;
  platform: string;
  type: string;
}

export interface Links {
  explorer: string[];
  facebook: string[];
  reddit: string[];
  source_code: string[];
  website: string[];
  youtube: string[];
  medium: any;
}

export interface LinksExtended {
  url: string;
  type: string;
  stats?: Stats;
}

export interface Stats {
  contributors?: number;
  stars?: number;
  subscribers?: number;
}

export interface Whitepaper {
  link: string;
  thumbnail: string;
}

export interface HistoryType {
  timestamp: string;
  price: number;
  volume_24h: number;
  market_cap: number;
}
