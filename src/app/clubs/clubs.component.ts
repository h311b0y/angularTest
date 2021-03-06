import { Component, OnInit, } from '@angular/core';
import { Club } from '../models/club';
import { Color } from '../models/colors';
import { ClubsService } from '../services/clubs.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  clubs: Club[];
  colors: Color[];
  currentClub: Club = {
    id: 0,
    name: '',
    city: '',
    color: 1,
    isTopFour: false,
    nextMatchDate: ''
  }
  isEdit: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private clubsService: ClubsService,
    private colorJSON: Color
  ) { }

  ngOnInit() {
    this.localStorageService.getClubs().subscribe(clubs => {
      this.clubs = clubs;
    });
  }
  showColors() {
    this.clubsService.getJSON()
      .subscribe(data => {
        console.log(data);
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

  removeclub(club: Club) {
    if(confirm('Are You Sure?')) {
      this.localStorageService.removeClub(club.id).subscribe(() => {
        this.clubs.forEach((cur, index) => {
          if(club.id === cur.id) {
            this.clubs.splice(index, 1);
          }
        });
      });
    }
  }

}
