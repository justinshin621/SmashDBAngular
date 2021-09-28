import {Injectable} from '@angular/core';
import {NotificationService} from './notification.service';
import {HttpClient} from "@angular/common/http";
import {LBCard} from "../_models/lbcard";

@Injectable({ providedIn: 'root' })
export class LBCardService {


  constructor(private notif: NotificationService, private http: HttpClient) {}


  getAll() {
    //return this.http.get<LBCard[]>(`/api/lbcard/getlbcards`);
    return this.http.get<LBCard[]>(`http://localhost:3030/lbcard/getlbcards`);
  }


}
