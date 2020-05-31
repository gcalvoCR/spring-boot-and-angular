import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    let valid = false;
    (username==='Gabriel' && password==='admin') ? valid = true : valid = false;
    return valid;
  }

}
