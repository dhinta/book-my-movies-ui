import { Language } from './common';

export interface Movie {
  _id: string;
  title: string;
  overview: string;
  casts: string[];
  languages: Language[];
  genres: string;
  posterPath: string;
  thumbnailPath: string;
  releaseDate: string;
  likeCount: number;
  rating: number;
  ratedBy: string;
  runtime: number;
  budget: number;
  revenue: number;
}
