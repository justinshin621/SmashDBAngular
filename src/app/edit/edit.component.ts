import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NotificationService} from "../_services/notification.service";
import {AuthService} from "../_services/auth.service";
import {FighterIcon} from "../_models/fightericon";
import {FighterService} from "../_services/fighter.service";
import {Fighter} from "../_models/fighter";
import {UserService} from "../_services/user.service";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  gsp = 0;

  fighter = '';

  avatar: FighterIcon;

  favorite: boolean;

  yesno: boolean;

  hasMain: boolean;

  date: Date

  fighters: Fighter[] = [];

  constructor(private route: ActivatedRoute,
              private notifService: NotificationService,
              private auth: AuthService,
              private fighterService: FighterService,
              private userSerivce: UserService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.favorite = params['favorite'].toString() === 'true';
      this.date = params['date'];
      this.gsp = params['gsp'];
      this.fighter = params['fighter']
    });

    this.hasMain = this.auth.currentUserValue.hasMain;
    this.avatar = this.getIcon();
    console.log(this.auth.currentUserValue.hasMain);
    console.log('Has Main is: ' + this.hasMain)
    console.log('Favorite is: ' + this.favorite);
  }

  editCard() {
    this.fighterService.edit({date: this.date,
        gsp: this.gsp, fighter: this.fighter, favorite: this.favorite, hasMain: this.hasMain},
      this.auth.currentUserValue.username)
      .subscribe(() => {
        console.log(this.auth.currentUserValue.username);
        this.notifService.showNotif('Update Saved', 'confirmation');
      }, error => {
        this.notifService.showNotif(error);
      });
  }

  getIcon() {
    if (this.fighter == 'Kirby') {
      return FighterIcon.Kirby
    }
    else if (this.fighter == 'Fox') {
      return FighterIcon.Fox
    }
    else if (this.fighter == 'Marth') {
      return FighterIcon.Marth
    }
    else if (this.fighter == 'Falco') {
      return FighterIcon.Falco
    }
    else if (this.fighter == 'Mario') {
      return FighterIcon.Mario
    }
    else if (this.fighter == 'Pikachu') {
      return FighterIcon.Pikachu
    }
    else if (this.fighter == 'Captain Falcon') {
      return FighterIcon.CFalcon
    }
    else if (this.fighter == 'Ganondorf') {
      return FighterIcon.Ganon
    }
    else if (this.fighter == 'Cloud') {
      return FighterIcon.Cloud
    }
    else if (this.fighter == 'Luigi') {
      return FighterIcon.Luigi
    }
    else if (this.fighter == 'Meta Knight') {
      return FighterIcon.MKnight
    }
    else if (this.fighter == 'Peach') {
      return FighterIcon.Peach
    }
    else if (this.fighter == 'Roy') {
      return FighterIcon.Roy
    }
    else if (this.fighter == 'Yoshi') {
      return FighterIcon.Yoshi
    }
    else if (this.fighter == 'Pichu') {
      return FighterIcon.Pichu
    }
    else {
      return FighterIcon.None
    }
  }

  formatLabel(value: number) {
    if (value >= 1000000) {
      return (Math.round(value / 100000)/ 10) + 'm';
    }

    return value;
  }

}

