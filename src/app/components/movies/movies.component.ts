import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../models/imovie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent implements OnInit {
  allMovies: Imovie[] = [];
  constructor(private moviesSer: MoviesService) {}
  ngOnInit(): void {
    this.moviesSer.getAllMovies().subscribe({
      next: (data) => {
        this.allMovies =data.results
        console.log(data);
        
      },
    });
  }
}
