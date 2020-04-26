import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpCLient: HttpClient) { }

  // login() = méthode servant à vérifier l'identité d'un utilisateur souhaitant se connecter

  login(mail: string, password: string): Observable<any> {

    // console.log(mail, password);
    const httpOptions = {
      // creation des en-tête de la requète Http, on indique qu'on echange du 'json'
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let userInfos: any = {
      'mail': mail,
      'password': password
    };

    return this.httpCLient.post<any>('http://localhost:3000/login', userInfos, httpOptions);
    // si on voulait faire une méthode get:
    // this.httpCLient.get('http://localhost:3000/login?mail=' + mail + "&password=" + password, httpOptions);
  }
}
