import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginDetails } from '../Models/loginDetails';
import { LoginViewModel } from '../Models/LoginViewModel';
import { RegModel } from '../Models/RegModel';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  rooturl = 'https://localhost:44347';


  constructor(private http: HttpClient
  ) { }

  userAuthentication(userName, password) {
      // tslint:disable-next-line: prefer-const
      let data = 'username=' + userName + '&password=' + password + '&grant_type=password';
      // tslint:disable-next-line: prefer-const
      let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
      return this.http.post(this.rooturl + '/token', data);
    }


  UserLogin(log: LoginViewModel){
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginDetails>(this.rooturl + '/api/Users/Login', log);
  }

  Register(reg: RegModel)
{

const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post(this.rooturl + '/api/Account/Register', reg);
}


}
