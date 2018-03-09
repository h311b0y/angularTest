import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClubsService } from './services/clubs.service';


@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LocalStorageService,
    ClubsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
