import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username==='Gabriel' && password==='admin') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
      
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user===null);
  }

  logout(){
    let user = sessionStorage.removeItem('authenticatedUser');
  }

}
