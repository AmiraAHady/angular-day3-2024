import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { Imovie } from '../../models/imovie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent implements OnInit {
  allMovies: Imovie[] = [];
  imagePath:string=environment.imagePath
  constructor(private moviesSer: MoviesService) {}
  ngOnInit(): void {
    this.moviesSer.getAllMovies().subscribe({
      next: (data) => {
        this.allMovies =data.results
        // console.log(data);
        
      },
    });
  }
}
