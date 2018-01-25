import { Injectable } from '@angular/core';

import { Club } from './club';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LocalStorageService {

  constructor() {
    //Sets intial data in local storage
    localStorage.setItem('clubs', '[{"id":0,"name":"Arsenal","city":"London","color":0,"isTopFour":false,"nextMatchDate":"2018-01-30T13:45:00-06:00"},{"id":1,"name":"Chelsea","city":"London","color":1,"isTopFour":true,"nextMatchDate":"2018-01-31T13:45:00-06:00"},{"id":2,"name":"Liverpool","city":"Liverpool","color":0,"isTopFour":true,"nextMatchDate":"2018-01-30T14:00:00-06:00"},{"id":3,"name":"Manchester City","city":"Manchester","color":2,"isTopFour":true,"nextMatchDate":"2018-01-31T14:00:00-06:00"},{"id":4,"name":"Manchester United","city":"Manchester","color":0,"isTopFour":true,"nextMatchDate":"2018-01-31T14:00:00-06:00"},{"id":5,"name":"Tottenham Hotspur","city":"London","color":3,"isTopFour":false,"nextMatchDate":"2018-01-31T14:00:00-06:00"}]')
  }

  //used to read the full dataset, simulates get request
  getClubs(): Observable<Club[]> {
    return Observable.create(o => {
      let data: Club[] = JSON.parse(localStorage.getItem('clubs')).map(e => new Club(e))
      o.next(data)
      o.complete()
    })
  }

  //used to update a single entry by id, simulates put request
  editClub(id: number, club: Club): Observable<Club> {
    return Observable.create(o => {
      let data: Club[] = JSON.parse(localStorage.getItem('clubs')).map(e => new Club(e))
      let i = data.findIndex(e => {
        return e.id === id
      })
      if (i !== -1) {
        data[i] = club
        data[i].id = id
        localStorage.setItem('clubs', JSON.stringify(data))
        o.next(club)
      } else {
        o.error('ERROR: edit id not found')
      }
      o.complete()
    })
  }

  //used to create a new entry, simulates post request
  addClub(club: any): Observable<Club> {
    return Observable.create(o => {
      let data: Club[] = JSON.parse(localStorage.getItem('clubs')).map(e => new Club(e))
      let id = data[data.length - 1].id + 1
      let added = new Club(Object.assign(club, { id: id }))
      data.push(added)
      localStorage.setItem('clubs', JSON.stringify(data))
      o.next(added)
      o.complete()
    })
  }

  //used to delete a single entry by id, simulates delete request
  removeClub(id: number): Observable<boolean> {
    return Observable.create(o => {
      let data: Club[] = JSON.parse(localStorage.getItem('clubs')).map(e => new Club(e))
      let i = data.findIndex(e => {
        return e.id === id
      })
      if (i !== -1) {
        data.splice(i, 1)
        localStorage.setItem('clubs', JSON.stringify(data))
        o.next(true)
      } else {
        o.error('ERROR: delete id not found')
      }
      o.complete()
    })
  }
}