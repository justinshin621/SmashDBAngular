import {User} from './user';

export class Fighter {
  name: string;
  gsp: number;
  avggsp: number;
  createdBy: User;
  createdDate: Date;
  isFavorite: boolean;
  isElite: boolean;
}
