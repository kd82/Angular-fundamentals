import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;
  updateCurrentUser(firstName: any, lastName: any) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'krishna',
      lastName: 'doddapaneni'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
