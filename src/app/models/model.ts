export interface User {
  username: string;
  password: string;
}


export interface Vendor {
  id: string;
  code: string;
  type: string;
  gameTypes: string[];
  defaultImage: string;
  name: string;
  shortcode: string;
  enabled: boolean;
}


export interface Game {
  id: string;
  vendor: GameVendor;
  type: string;
  name: string;
  image: string;
  enabled: boolean;
  hot: boolean;
  new: boolean;
  favorite: boolean;
}

interface GameVendor {
  id: string;
  code: string;
  shortcode: string;
}
