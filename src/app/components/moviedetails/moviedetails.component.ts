import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { IMovieDetails } from '../../models/imovie-details';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-moviedetails',
  standalone: true,
  imports: [],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.scss',
})
export class MoviedetailsComponent implements OnInit {
  // imagePath:string="https://image.tmdb.org/t/p/w500"
  imagePath:string=environment.imagePath
  singleMovie!:IMovieDetails;
  constructor(
    private movieServ: MoviesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let movieID: number = Number(this.route.snapshot.paramMap.get('mid')!);
    this.movieServ.getMovieById(movieID).subscribe({
      next: (data) => {
       this.singleMovie=data;
      },
    });
  }
}
