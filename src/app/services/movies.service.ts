import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Imovie } from '../models/imovie';
import { IMovieDb } from '../models/imoviedb';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  // api_key = '037f872ea1c47d9d478cde261bcb9c2e';
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<IMovieDb>{
    return this.http.get<IMovieDb>(
      `${environment.baseUrl}movie/now_playing?api_key=${environment.api_key}`
    );
  }

  getMovieById(movId:number):Observable<any>{
    return this.http.get<any>(`${environment.baseUrl}movie/${movId}?api_key=${environment.api_key}`)
  }
}
