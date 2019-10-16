import { Injectable, Inject } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {

  currentUser: IUser;

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  updateCurrentUser(firstName: any, lastName: any) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  loginUser(userName: string, password: string) {
    const loginInfo = {username: userName, password };
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/login/', loginInfo, options)
            .pipe(tap(data => {
              this.currentUser = data['user'] as IUser;
            }))
            .pipe(catchError(err => {
              return of(false);
            }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
  checkAuthenticationStatus() {
    this.http.get('/api/current')
    .pipe(tap(data=>{
       if(data instanceof Object){
         this.currentUser= data as IUser;
       }
    })).subscribe();
  }
}
