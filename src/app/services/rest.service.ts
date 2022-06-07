import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  api = 'http://127.0.0.1:8000/api';
  id:any;
  token: any;//any: para especificar una variable de cualquier tipo
  checkActived: any;
  constructor(private http: HttpClient) { }

  login(email: any,password: any) {// hacer opcionalmente para email: string y password: string
    // para que nos devuelva una promesa, sintáxis para llamar a apirest

    return new Promise(resolve => {

        // <any>: para crearnos una interface, por ejemplo: <Usuario>
        this.http.post<any>('http://127.0.0.1:8000/api/login',
        {
          email: email,
          password: password 
          
        }).subscribe(success => {// raul@raul.com devuelve los datos a quien llame a esta función
          this.token = success.success.token;// para guardar solamente el token
          this.checkActived = success.success.actived;
          console.log(success)
          resolve(this.token);
          
        });
    });
  }
  spells() {// hacer opcionalmente para email: string y password: string
    // para que nos devuelva una promesa, sintáxis para llamar a apirest

    return new Promise(resolve => {
 
      this.http.get('http://127.0.0.1:8000/api/spells', {
        
        
      }).subscribe(data => {
        
        resolve(data);
        console.log(data);
      }, err => {
        console.log('Error, '+err);
      });
    });
  }
  weapons() {// hacer opcionalmente para email: string y password: string
    // para que nos devuelva una promesa, sintáxis para llamar a apirest

    return new Promise(resolve => {
 
      this.http.get('http://127.0.0.1:8000/api/weapons', {
        
        
      }).subscribe(data => {
        
        resolve(data);
        console.log(data);
      }, err => {
        console.log('Error, '+err);
      });
    });
  }
}
