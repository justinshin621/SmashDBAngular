import {Injectable} from '@angular/core';
import {NotificationService} from './notification.service';
import {User} from "../_models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class UserService {


  constructor(private notif: NotificationService, private http: HttpClient) {}


  register(user: User) {
    //return this.http.post(`/api/user/register`, user);
    return this.http.post(`http://localhost:3030/user/register`, user);
  }

  getAll() {
    //return this.http.get<User[]>(`/api/user/allusers`);
    return this.http.get<User[]>(`http://localhost:3030/user/allusers`);
  }




}
