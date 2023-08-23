import { animeById } from "../../server/functions/anime-by-id";
import { Media } from "./anilist.interfaces";

export type RecursivePartial<T> = {
  [K in keyof T]?: RecursivePartial<T[K]>;
};

export type AniMediaData = {
  data: RecursivePartial<Media>;
};

export type AniQueryFn = typeof animeById;
