import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MovieSynopsisComponent } from '../movie-synopsis/movie-synopsis.component';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MovieDirectorComponent } from '../movie-director/movie-director.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  constructor(
    public fetchApiData: GetMoviesService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  openSynopsisDialog(synopsis: string): void {
    this.dialog.open(MovieSynopsisComponent, {
      data: { synopsis },
    });
  }

  openGenreDialog(name: string, description: string): void {
    this.dialog.open(MovieGenreComponent, {
      data: { name, description },
    });
  }

  openDirectorDialog(name: string, bio: string, birth: string): void {
    this.dialog.open(MovieDirectorComponent, {
      data: { name, bio, birth },
    });
  }
  
  
}