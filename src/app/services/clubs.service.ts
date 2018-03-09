import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Club } from '../models/club';
import { Color } from '../models/colors';
import { LocalStorageService } from './local-storage.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class ClubsService {
  clubs: Club[];
  colorsUrl: string = './assets/colors';

  constructor(private http: HttpClient) { }

  getColors(): Observable<Color[]> {
    return this.http.get<Color[]>(this.colorsUrl);
  }

}
