export interface Movie {
  id: number;
  title: string;
  overview: string;
  casts: string[];
  languages: string[];
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
