import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

export type Gym = 'cerulean' | 'pewter' | 'vermillion';
export interface User {
  name: string;
  age: number;
  gym: Gym;
  favorite: string;
  money: number;
}

export const createUser = () => ({ name: '', age: null, gym: '', favorite: '', money: 0 })

@Injectable()
export class UserServiceService {

  constructor() { }

  updateInfo(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    return Observable.of(true);
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('user'));

    return Observable.of(user || createUser());
  }
}
