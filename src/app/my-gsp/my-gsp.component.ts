import { Component, OnInit } from '@angular/core';
import {Fighter} from "../_models/fighter";
import {UserService} from "../_services/user.service";
import {NotificationService} from "../_services/notification.service";
import {AuthService} from "../_services/auth.service";
import {FighterService} from "../_services/fighter.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-my-gsp',
  templateUrl: './my-gsp.component.html',
  styleUrls: ['./my-gsp.component.css']
})
export class MyGSPComponent implements OnInit {

  fighters: Fighter[] = [];

  constructor(private userService: UserService,
              private notifService: NotificationService,
              private authService: AuthService,
              private fighterService: FighterService) { }

  ngOnInit() {
    this.loadAllFighters();
  }

  loadAllFighters() {
    this.fighterService.getAll().subscribe(fighters => {
      this.fighters = fighters;
      console.log(this.fighters);
    },
      error => this.notifService.showNotif(error.toString(), 'warning'));
  }

  deleteFighter(date) {
    console.log('Getting through');
    console.log(date);
    console.log(this.authService.currentUserValue.username);
    this.fighterService.delete(date, this.authService.currentUserValue.username).pipe(first()).subscribe(() => {
      this.fighters = null;
      this.loadAllFighters();
      this.notifService.showNotif('Deleted Fighter!', 'response');
    });
  }

}
