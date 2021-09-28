import {Component, Input, OnInit} from '@angular/core';
import {LBCard} from "../_models/lbcard";
import {AuthService} from "../_services/auth.service";
import {FighterIcon} from "../_models/fightericon";

@Component({
  selector: 'app-lbcard',
  templateUrl: './lbcard.component.html',
  styleUrls: ['./lbcard.component.css']
})
export class LBCardComponent implements OnInit {

  @Input() LBCard: LBCard;

  initials: string;

  rank = 0;

  mode = 'determinate';

  avatar: FighterIcon

  avggsp = 0;

  topgsp = 0;

  color = '#'

  letters = '0123456789ABCDEF';

  isElite: boolean

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.avggsp = this.LBCard.avggsp;
    this.topgsp = this.LBCard.topgsp;
    this.initials = this.LBCard.first[0] + this.LBCard.last[0];
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    this.avatar = this.getIcon();
    this.isElite = this.LBCard.isElite;
    this.rank = this.LBCard.rank;
  }

  isUser() {
    return this.LBCard.username === this.auth.currentUserValue.username;
  }

  getIcon() {
    if (this.LBCard.favoriteFighter == 'Kirby') {
      return FighterIcon.Kirby
    }
    else if (this.LBCard.favoriteFighter == 'Fox') {
      return FighterIcon.Fox
    }
    else if (this.LBCard.favoriteFighter == 'Marth') {
      return FighterIcon.Marth
    }
    else if (this.LBCard.favoriteFighter == 'Falco') {
      return FighterIcon.Falco
    }
    else if (this.LBCard.favoriteFighter == 'Mario') {
      return FighterIcon.Mario
    }
    else if (this.LBCard.favoriteFighter == 'Pikachu') {
      return FighterIcon.Pikachu
    }
    else if (this.LBCard.favoriteFighter == 'Captain Falcon') {
      return FighterIcon.CFalcon
    }
    else if (this.LBCard.favoriteFighter == 'Ganondorf') {
      return FighterIcon.Ganon
    }
    else if (this.LBCard.favoriteFighter == 'Cloud') {
      return FighterIcon.Cloud
    }
    else if (this.LBCard.favoriteFighter == 'Luigi') {
      return FighterIcon.Luigi
    }
    else if (this.LBCard.favoriteFighter == 'Meta Knight') {
      return FighterIcon.MKnight
    }
    else if (this.LBCard.favoriteFighter == 'Peach') {
      return FighterIcon.Peach
    }
    else if (this.LBCard.favoriteFighter == 'Roy') {
      return FighterIcon.Roy
    }
    else if (this.LBCard.favoriteFighter == 'Yoshi') {
      return FighterIcon.Yoshi
    }
    else if (this.LBCard.favoriteFighter == 'Pichu') {
      return FighterIcon.Pichu
    }
    else {
      return FighterIcon.None
    }
  }


}
