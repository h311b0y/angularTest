import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';
import { Club } from '../models/club';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})

export class ClubComponent implements OnInit {
  @Output() newClub: EventEmitter<Club> = new EventEmitter();
  @Output() updatedClub: EventEmitter<Club> = new EventEmitter();
  @Input() currentClub: Club;
  @Input() currentId: number;
  @Input() isEdit: boolean;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

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

  updatePost() {
    this.localStorageService.editClub(this.currentId, this.currentClub).subscribe(club => {
      console.log(club);
      this.isEdit = false;
      this.updatedClub.emit(club);
    });
  }

}
