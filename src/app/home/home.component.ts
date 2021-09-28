import {Component, OnInit } from '@angular/core';

import {UserService} from '../_services/user.service';
import {NotificationService} from '../_services/notification.service';
import {FighterService} from "../_services/fighter.service";

import {AuthService} from "../_services/auth.service";
import {FighterIcon} from "../_models/fightericon";


@Component({ templateUrl: 'home.component.html' ,

  styleUrls: ['home.component.css']},
  )

  export class HomeComponent implements OnInit {

  characters: string[] = ['Fox', 'Cloud', 'Pikachu', 'Mario', 'Luigi', 'Marth', 'Roy', 'Falco', 'Meta Knight', 'Peach',
    'Pichu', 'Captain Falcon', 'Ganondorf', 'Yoshi', 'Kirby'];
  GSP: number;
  fighter = 'Fox';
  avatar = FighterIcon.cfal;



  constructor(
    private userService: UserService,
    private fighterService: FighterService,
    private notifService: NotificationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
  }


  submit() {
    const record = {
      name: this.fighter,
      gsp: this.GSP,
      isFavorite: false,
      isElite: false
    };
    console.log(record);
    console.log(this.authService.currentUserValue.username);
    this.fighterService.submit(record, this.authService.currentUserValue.username).subscribe(() => {
      console.log('here');
      this.notifService.showNotif('Fighter GSP recorded!', 'confirmation');
    },
      error => {
        this.notifService.showNotif(error, 'error');
      });

  }
}

