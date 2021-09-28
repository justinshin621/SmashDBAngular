import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FighterIcon} from "../_models/fightericon";
import {Fighter} from "../_models/fighter";
import {UserService} from "../_services/user.service";
import {User} from "../_models/user";
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";
import {NotificationService} from "../_services/notification.service";

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.css']
})
export class FighterComponent implements OnInit {

  @Input() fighter: Fighter;
  @Output() deleteEvent = new EventEmitter<Date>()

  username = '';

  currentUser = '';

  gsp: number;

  avggsp: number;

  avatar: FighterIcon;

  date: string;

  star = FighterIcon.star;

  isFavorite: boolean

  isElite: boolean

  users: User[] = [];

  constructor(private router: Router,
              private auth: AuthService,
              private notifService: NotificationService,
              private userSerivce: UserService) { }

  delete(date) {
    console.log(date);
    this.deleteEvent.emit(date);
  }

  edit() {

    if (this.fighter.createdBy.toString() === this.auth.currentUserValue._id){
      this.router.navigate(['/edit', this.fighter.createdDate ,this.fighter.name, this.fighter.gsp,
        this.fighter.isFavorite]);
    }
    else {
      this.notifService.showNotif('Operation Not Permitted For: ' + this.currentUser);
    }

  }

  ngOnInit() {

    this.userSerivce.getAll().subscribe(users => {
      this.users = users;
      console.log(this.users);

      for (let i = 0; i < this.users.length; i++) {
        if (this.fighter.createdBy.toString() === this.users[i]._id) {
          this.username = this.users[i].username;
        }
        if (this.auth.currentUserValue._id === this.users[i]._id){
          this.currentUser = this.users[i].username;
        }
      }
    });

    this.gsp = this.fighter.gsp
    this.avggsp = this.fighter.avggsp;
    this.date = this.fighter.createdDate.toString()
    this.username = this.fighter.createdBy.username
    this.avatar = this.getIcon();
    this.isElite = this.fighter.isElite;
    this.isFavorite = this.fighter.isFavorite;

    console.log(this.fighter.createdBy);
  }

  getIcon() {
    if (this.fighter.name == 'Kirby') {
      return FighterIcon.Kirby
    }
    else if (this.fighter.name == 'Fox') {
      return FighterIcon.Fox
    }
    else if (this.fighter.name == 'Marth') {
      return FighterIcon.Marth
    }
    else if (this.fighter.name == 'Falco') {
      return FighterIcon.Falco
    }
    else if (this.fighter.name == 'Mario') {
      return FighterIcon.Mario
    }
    else if (this.fighter.name == 'Pikachu') {
      return FighterIcon.Pikachu
    }
    else if (this.fighter.name == 'Captain Falcon') {
      return FighterIcon.CFalcon
    }
    else if (this.fighter.name == 'Ganondorf') {
      return FighterIcon.Ganon
    }
    else if (this.fighter.name == 'Cloud') {
      return FighterIcon.Cloud
    }
    else if (this.fighter.name == 'Luigi') {
      return FighterIcon.Luigi
    }
    else if (this.fighter.name == 'Meta Knight') {
      return FighterIcon.MKnight
    }
    else if (this.fighter.name == 'Peach') {
      return FighterIcon.Peach
    }
    else if (this.fighter.name == 'Roy') {
      return FighterIcon.Roy
    }
    else if (this.fighter.name == 'Yoshi') {
      return FighterIcon.Yoshi
    }
    else if (this.fighter.name == 'Pichu') {
      return FighterIcon.Pichu
    }
    else {
      return FighterIcon.None
    }
  }



}
