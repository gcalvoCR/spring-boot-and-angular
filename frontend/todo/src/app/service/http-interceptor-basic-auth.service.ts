import { BasicAuthenticationService } from './basic-authentication.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler , HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    //let username = 'in28minutes'
    //let password = 'dummy'
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username+':'+password)

    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();
    
    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    
    return next.handle(request);

  }
}
