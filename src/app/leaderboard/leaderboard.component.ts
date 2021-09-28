import { Component, OnInit } from '@angular/core';
import {LBCard} from "../_models/lbcard";
import {LBCardService} from "../_services/lbcard.service";
import {NotificationService} from "../_services/notification.service";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  LBCards: LBCard[] = [];

  constructor(private lbcardService: LBCardService,
              private notifService: NotificationService) { }

  ngOnInit() {
    this.loadAllCards();
  }

  private loadAllCards() {
    this.lbcardService.getAll().subscribe(cards => {
      this.LBCards = cards;
      this.LBCards.forEach((card, index) => {
        card.rank = index + 1;
      });
      this.LBCards.sort(this.compare);
      console.log(this.LBCards);
    },
      error => {this.notifService.showNotif(error, 'error'); });
  }

  private compare(a, b) {
    return b.avggsp - a.avggsp;
  }
}
