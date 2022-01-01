import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIResponse, Movie } from './models';


// https://material.angular.io/components/grid-list/overview
// https://www.dotnettricks.com/learn/angularmaterial/gridlayout
// video render
// https://stackoverflow.com/questions/30867033/how-to-render-video-in-browser-before-uploading-it-using-angularjs
@Component({
  selector: 'my-prefix-movies',
  template: `
    <p>
      movies works!
    </p>
    <!-- <button (click)="getRequestToken()">1: Get Request Token</button>
    <button (click)="approveRequestToken()">2: Approve Token</button>
    <button (click)="getAccessToken()">3: Get Access Token</button> -->

    <mat-grid-list cols="2" rowHeight="8:1">
      <mat-grid-tile>1</mat-grid-tile>
      <mat-grid-tile>2</mat-grid-tile>
      <mat-grid-tile>3</mat-grid-tile>
      <mat-grid-tile>4</mat-grid-tile>
    </mat-grid-list>
    `,
  styles: [`
    /* mat-list {overflow: hidden;} */
    mat-grid-tile{ background: lightblue; }

  `]
})

export class MoviesComponent implements OnInit {
  // requestToken: any;
  // access_token: any;
  // api_host = 'https://api.themoviedb.org';
  // web_host = 'https://www.themoviedb.org';
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjA3YjE5MjYyNzNkZGVmZGI1YmFkODU2ZGEzOGNmNyIsInN1YiI6IjYxYjM3MTNiOGUyYmE2MDA5OTg2N2YyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DH8QiVShRcQY6al2unnA9QXGj6H55cKExiS0tdpsiyM'
  //   }),
  //   start_time: new Date().getTime(),
  // };

  constructor(private http: HttpClient) { }

  // getRequestToken(): any {
  //   this.http
  //     .post(this.api_host + '/4/auth/request_token' , null, this.httpOptions)
  //     .subscribe({
  //       next : (response) => {
  //         console.log( response );
  //         this.requestToken =  Object.values(response)[0];
  //       },
  //       error : (error) => { console.log(error); }
  //     })
  // }

  // approveRequestToken(): any {
  //   window.open(this.web_host + '/auth/access?request_token=' + this.requestToken);
  // }
  // getAccessToken(): any {
  //   this.http
  //     .post(this.api_host + '/4/auth/access_token' , null, this.httpOptions)
  //     .subscribe({
  //       next : (response) => {
  //         console.log(response);
  //         this.access_token = response;
  //       },
  //       error : (error) => { console.log(error); }
  //     })
  // }

  ngOnInit(): void {

  }
}
