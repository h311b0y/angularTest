import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Club } from '../models/club';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})

export class ClubComponent implements OnInit {
  @Output() newClub: EventEmitter<Club> = new EventEmitter();
  @Output() updatedClub: EventEmitter<Club> = new EventEmitter();
  @Input() currentClub: Club;
  @Input() isEdit: boolean;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

}
