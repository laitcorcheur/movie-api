export interface Movie {
  page: number;
  results: Array<Results>;
  total_pages: number;
  total_results: number;
}
export interface APIResponse<T> {
  results: Array<T>;
}
interface Results {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface APIResponseCredit<T> {
  cast: Array<T>;
}
export interface Movie_credits{
 id: number;
 cast: Array<Actor>;
}
export interface Actor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Movie_detail{
  adult: boolean;
  backdrop_path: string;
  // belongs_to_collection: Object { id: 912503, name: "Shang-Chi Collection", poster_path: "/x9y9KmPa2RXavK39cwJx4w3AJ2y.jpg", … }
  budget: number;
  // genres: Array(3) [ {…}, {…}, {…} ]
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  // production_companies: Array [ {…} ]
  // production_countries: Array [ {…} ]
  release_date: string;
  revenue: number;
  runtime: number;
  // spoken_languages: Array [ {…}, {…} ]
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

