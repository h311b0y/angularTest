import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Club } from '../models/club';
import { ClubsService } from '../services/clubs.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  clubs: Club[];
  currentClub: Club = {
    id: 0,
    name: '',
    city: '',
    color: 1,
    isTopFour: false,
    nextMatchDate: ''
  }
  isEdit: boolean = false;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.localStorageService.getClubs().subscribe(clubs => {
      this.clubs = clubs;
    });
  }

  onNewClub(club: Club) {
    this.clubs.unshift(club);
  }

  editClub(club: Club) {
    this.currentClub = club;
    this.isEdit = true;
  }

  onUpdatedclub(club: Club) {
    this.clubs.forEach((cur, index) => {
      if(club.id === cur.id) {
        this.clubs.splice(index, 1);
        this.clubs.unshift(club);
        this.isEdit = false;
        this.currentClub = {
          id: 0,
          name: '',
          city: '',
          color: 1,
          isTopFour: false,
          nextMatchDate: ''
        }
      }
    });
  }

}
