import { Component, Injectable, OnInit, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Actor, APIResponse, APIResponseCredit, Movie } from './models';
import {OverlayModule} from '@angular/cdk/overlay';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'my-prefix-services',
  template: `
  <ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="triggerOrigin" [cdkConnectedOverlayHasBackdrop]="true"
                (backdropClick)="isOpen=false" [cdkConnectedOverlayOpen]="isOpen">
    <div class="details">
      <div class="details-body">
        <p>recommended at {{movie_id.vote_average*10}}% {{movie_id.vote_count}} reviews</p>
        <div class="movie-description">
            <p>{{movie_id.overview}}</p>
        </div>
        <div class="movie-credits">
          <div class="card__circle card__circle1"></div>
          <div class="card__circle card__circle2"></div>
          <div class="card__container bd-container" >
            <ng-container class="loop__card" *ngFor="let movie_cr of movie_credits; let i=index">
                <div class="movie-platform" *ngFor="let movie_credits of movie_credits.cast; let i=index">
                    <img *ngIf="i<1" src="https://image.tmdb.org/t/p/w92/{{movie_credits.profile_path}}" alt="actor"/>
                </div>

                <div class="card__glass" *ngIf="i<3">
                <img *ngIf="movie_cr.profile_path" src="https://image.tmdb.org/t/p/w92/{{movie_cr.profile_path}}" alt="actor"/>
                <p *ngIf="!movie_cr.profile_path">No image</p>
                <div class="card__data">
                    <h3 class="card__name">{{movie_cr.name}}</h3>
                    <span class="card__character">{{movie_cr.character}}</span>
                </div>
                <a href="https://en.wikipedia.org/w/index.php?title={{movie_cr.name}}" class="card__button">Know more</a>
              
               </div>
            </ng-container>
          </div>
        </div>
      </div>
      <!-- <button class="btn btn-standard" (click)="isOpen=false">Close</button> -->
    </div>
  </ng-template>
<!-- overlay END -->

  <div class="filters" ></div>
  <div class="movies">
    <ng-container *ngFor="let movie of popularMovies">
      <!-- <div class="movie" (click)="openGameDetails(movie.id)"> -->
      <div class="movie" cdkOverlayOrigin #trigger="cdkOverlayOrigin" (click)="toggle(trigger, movie)">
        <div class="movie-thumb-container">
          <img
           *ngIf="movie.poster_path"
            src="https://image.tmdb.org/t/p/w185/{{ movie.poster_path }}"
            alt="thumbnail"
            class="movie-thumbnail"
          />
            <!-- 0: "w92" 1 "w154" 2: "w185" 3: "w342" 4: "w500" 5: "w780" 6: "original" -->
        <p *ngIf="!movie.poster_path">No image</p>
        </div>
        <div class="movie-description">
          <p class="movie-name">{{ movie.title }}</p>
          <p class="movie-name-detail movie-name">{{ movie.release_date }}</p>
          <!-- <div class="movie-platforms">
            <img
             *ngFor="let gamePlatform of movie.parent_platforms"
              class="movie-platform"
              src="assets/images/platforms/{{ gamePlatform.platform.slug }}.svg"
              alt="{{ gamePlatform.platform.slug }}"
            />
          </div> -->
        </div>
      </div>
    </ng-container>
  </div>


  `,
  styles: [`
h3{
  margin: 0;
}

a{
  text-decoration: none;
}

img{
  max-width: 100%;
  height: auto;
}

.bd-container{
  max-width: 968px;
  width: calc(100% - 3rem);
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

/*========== CARD GLASS ==========*/
.loop__card{
  display: inline-block;
}

.card{
  position: relative;
  overflow: hidden;
  padding: 3rem 0;
  background-color: var(--body-color);
}

.card__container{
  display: grid;
  gap: 1.5rem;
}

.card__glass{
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 2.5rem;
  background: linear-gradient(130deg,
              rgba(251,251,254,.6),
              rgba(251,251,254,.2));
  box-shadow: inset 2px 2px 1px rgba(251,251,254,.3)
              inset -2px -2px 1px rgba(251,251,254,.2);
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
}

.card__img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #F4F4FB;
  margin-bottom: 1rem;
}

.card__data{
  margin-bottom: 1.5rem;
}

.card__name{
character: var(--h3-font-size);
  color: var(--title-color);
  font-weight: 600;
  margin-bottom: .25rem;
}

.card__character, .card__name{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.card__profession{
  font-size: var(--small-font-size);
  color: var(--text-color);
  font-weight: 500;
}

.card__button{
  display: inline-block;
  background: linear-gradient(130deg,
              rgba(251,251,254,.9),
              rgba(251,251,254,.2));
  padding: .75rem 1.5rem;
  border-radius: .5rem;
  color: var(--title-color);
  font-weight: 500;
  transition: .4s;
}

.card__button:hover{
  background: linear-gradient(130deg,
              rgba(251,251,254,1),
              rgba(251,251,254,.4));
}

.card__link{
  display: block;
  font-size: 1.35rem;
  color: var(--title-color);
  margin: 1rem 0;
  transform: translateX(-5rem);
}

.card__link:nth-child(1){
  transition: .2s;
}
.card__link:nth-child(2){
  transition: .5s;
}
.card__link:nth-child(3){
  transition: .7s;
}

.card__glass:hover .card__link{
  transform: translateX(-1.5rem);
}

.card__circle{
  position: absolute;
  width: 250px;
  height: 250px;
  background: linear-gradient(130deg,
              rgba(77,73,191,.8),
              rgba(255,255,255,.2));
  border-radius: 50%;
}

.card__circle1{
  /* top: 20%; */
  left: -20%;
}

.card__circle2{
  bottom: -5%;
  right: -25%;
  background: linear-gradient(130deg,
              rgba(5,219,242,.8),
              rgba(255,255,255,.2));
}

/*========== MEDIA QUERIES ==========*/
@media screen and (min-width: 568px){
  .card__container{
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px){
  .bd-container{
    margin-left: auto;
    margin-right: auto;
  }

  .card{
    padding: 0;
  }

  .card__container{
    height: auto;
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
  }
  .card__container, .bd_container{
  }
  .card__circle1{
    /* left: 5%;
    top: 12%; */
  }

  .card__circle2{
    /* right: 8%; */
    bottom: 15%;
  }
}



/* FIN CARDS ACTOR */
::ng-deep .cdk-overlay-dark-backdrop{
  background: rgba(0,0,0,.65);
}
.movie-credits{
  display: inline;
}
  /* .truc{
    color: white;
    overflow: hidden;
    border-radius: 5px;
    background-color: #053477;
    transition-duration: 0.3s;
    padding: 0.3em 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-weight: 300;

    &-details-body{
    }
} */
  .details{
    width: 60vw;
    height: auto;
    background-color: #DFDFDF;
    color: #3c454f;
    box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 5px 10px, rgba(15, 15, 15, 0.2) 0px 15px 40px;
    padding: 0.3em 1em;
    &-details-body{
      position: absolute;
      margin-left: auto;
      max-width: 970px;
      background: white none repeat scroll 0% 0%;
      top: 72px; left: 72px; right: 72px;
      margin-right: auto;
      height: calc(100% - 144px);
      width: 100%;
      color: white;
      /* margin: 10px; */
      overflow: hidden;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-weight: 300;
    }
  }

  ::ng-deep {
    .mat-form-field-infix {
      background-color: #3f51b5;
    }

    .mat-select-value,
    .mat-select-arrow,
    .mat-form-field-hide-placeholder .mat-select-placeholder,
    .mat-form-field-appearance-legacy .mat-form-field-label {
      color: #fff !important;
      opacity: 1;
    }

    .mat-form-field-infix {
      border-color: #fff !important;
      border-top: none;
      padding-left: 5px !important;
    }

    .mat-form-field-appearance-legacy .mat-form-field-label {
      padding-left: 5px;
    }

    .mat-form-field-appearance-legacy .mat-form-field-underline {
      background-color: #fff !important;
    }
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin: 20px auto;

    &-screenshot {
      margin-top: 5px;
      width: calc(50% - 10px);

      &:nth-child(even) {
        margin-left: 10px;
      }
    }
  }


  .movie{
  width: 280px;
  margin: 10px;
  height: 330px;
  overflow: hidden;
  border-radius: 5px;
  /* background-color: slategray; */
  box-shadow: 4px 3px 8px 0px rgb(2 27 61 / 32%);
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 4px 3px 11px 6px rgb(2 27 61 / 56%);
    transform: translateY(-3px);
  }

  &-thumb-container {
    /* background-color: #d6d7e3; */
    position: relative;
    height: 80%;
    color: #fff;
    text-align: center;
  }

  &-thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 100%;
  }

  &-description {
    padding: 0.5em 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* height: 157px; */
  }

  &-name {
    color: #fff;
    font-weight: 700;
    font-size: 1em;
    /* margin-bottom: 20px; */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: inherit;
  }

  &-name-detail {
    font-weight: 200;
    margin-top: 0.5em;
    font-size: small;
  }

  &-platforms {
    display: flex;
  }

  &-platform {
    width: 20px;
    margin-right: 10px;
  }
}


  `]
})

export class ServicesComponent implements OnInit {
  popularMovies: any;
  sessionToken: any;
  requestToken: any;
  access_token: any;
  movie_id: any;
  movie_details: any;
  movie_credits: any;
  // details
  isOpen = false;
  triggerOrigin: any;

  httpOptionsV3 = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: '9f07b1926273ddefdb5bad856da38cf7'
    }),
    start_time: new Date().getTime(),
  };

  constructor(private http: HttpClient, private details: DetailsComponent ) { }

  toggle(trigger: any, movie: any) {
    this.getDetail(movie.id);
    this.movie_id = movie;
    this.triggerOrigin = trigger;
    this.isOpen = !this.isOpen
  }

  getDetail(movie_id: number): void{
    // this.http
    // .get(`${env.api_host}`+"/3/movie/"+movie_id+"?api_key="+`${env.api_key}`)
    //   .subscribe({
    //     next : (response) => {
    //       console.log( response );
    //       this.movie_details = response;
    //     },
    //     error : (error) => { console.log(error); }
    //   })
      this.http
      .get<APIResponseCredit<Actor>>(`${env.api_host}`+"/3/movie/"+movie_id+"/credits?api_key="+`${env.api_key}`+"&language=en-US")
        .subscribe({
          next : (response) => {
            console.log( response );
            this.movie_credits = response.cast;
          },
          error : (error) => { console.log(error); }
        })
  }

  createGuestSession(): any {
    this.http
    .get(`${env.api_host}`+"/3/authentication/guest_session/new?api_key="+`${env.api_key}`)
      .subscribe({
        next : (response) => {
          console.log( response );
          this.createRequestToken();
          // this.sessionToken =  Object.values(response)[0];
        },
        error : (error) => { console.log(error); }
      })
  }
  createRequestToken(): any {
    this.http
    .get(`${env.api_host}`+"/3/authentication/token/new?api_key="+`${env.api_key}`)
      .subscribe({
        next : (response) => {
          console.log( response );
          this.sessionToken =  Object.values(response)[0];
        },
        error : (error) => { console.log(error); }
      })
  }
  requestPopularMovies(): any {
    this.http
    .get<APIResponse<Movie>>(`${env.api_host}`+"/3/movie/popular/?api_key="+`${env.api_key}`+"&language=en-US")
      .subscribe({
        next : (response) => {
          // console.log( response );
          this.popularMovies = response.results;
          // console.log( response.results );
        },
        error : (error) => { console.log(error); }
      })
  }
  getConfiguration(): any {
    this.http
    .get(`${env.api_host}`+"/3/configuration?api_key="+`${env.api_key}`)
      .subscribe({
        next : (response) => {
          console.log( response );
        },
        error : (error) => { console.log(error); }
      })
  }

  ngOnInit(): void {
    // if fail refresh?
    this.createGuestSession();
    this.requestPopularMovies();
    // this.getConfiguration();
  }
}
