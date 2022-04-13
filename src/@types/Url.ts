export interface PostUrl {
  user_id: string;
  original_url: string;
}

export interface GetUrl {
  original_url: string;
  hash: string;
}

export interface Url {
  uuid: string;
  original_url: string;
  user_id: string;
  hash: string;
  created_at: Date;
}