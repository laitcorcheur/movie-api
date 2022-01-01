import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MoviesComponent } from './movies.component';
import { ServicesComponent } from './services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DetailsComponent } from './details/details.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { OverlayComponent } from './overlay/overlay.component';

import { NgParticlesModule } from "ng-particles";
import { NavComponent } from './nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 

// <!-- https://stackoverflow.com/questions/58500879/implement-session-storage-in-an-angular-8-application -->


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ServicesComponent,
    DetailsComponent,
    OverlayComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    BrowserAnimationsModule,

    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    OverlayModule,
    NgParticlesModule,
    MatSidenavModule,
    MatToolbarModule

  ],
  providers: [DetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
