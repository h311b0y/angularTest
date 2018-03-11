import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';

import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClubsService } from './services/clubs.service';
import { ClubComponent } from './club/club.component';


@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ClubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    LocalStorageService,
    ClubsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
