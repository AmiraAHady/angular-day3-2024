import { Imovie } from './imovie';

export interface IMovieDb {
  dates: object;
  page: number;
  results: Imovie[];
  total_pages: number;
  total_results: number;
}
