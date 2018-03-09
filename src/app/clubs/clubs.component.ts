import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Club } from '../models/club';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  @Output() newClub: EventEmitter<Club> = new EventEmitter();
  @Output() updatedClub: EventEmitter<Club> = new EventEmitter();
  @Input() currentClub: Club;
  @Input() isEdit: boolean;

  constructor() { }

  ngOnInit() {
  }

}
