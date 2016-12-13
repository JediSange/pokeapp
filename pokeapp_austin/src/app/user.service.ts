import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  name: string;
  age: number;
  gym: string;
}

@Injectable()
export class UserService {

  constructor() { }

  updateInfo(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    return Observable.of(true);
  }
}
