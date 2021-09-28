import {Injectable} from '@angular/core';
import {NotificationService} from './notification.service';
import {HttpClient} from "@angular/common/http";
import {Fighter} from "../_models/fighter";

@Injectable({ providedIn: 'root' })
export class FighterService {
  constructor(private notif: NotificationService, private http: HttpClient) {}


  submit(record, username) {
    //return this.http.post(`/api/fighter/submit/` + username, record);
    return this.http.post(`http://localhost:3030/fighter/submit/` + username, record);
  }

  edit(values, username) {
    //return this.http.post(`/api/fighter/edit/` + username, values);
    return this.http.post(`http://localhost:3030/fighter/edit/` + username, values);
  }

  delete(date, username) {
    //return this.http.delete(`/api/fighter/${date}/${username}`);
    return this.http.delete(`http://localhost:3030/fighter/${date}/${username}`);
  }

  getAll() {
    //return this.http.get<Fighter[]>(`/api/fighter/get`);
    return this.http.get<Fighter[]>(`http://localhost:3030/fighter/get`);
  }

}
