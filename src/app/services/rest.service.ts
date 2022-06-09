import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  api = 'http://127.0.0.1:8000/api';
  user:any;
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
          this.user =success.success;
          console.log(success)
          resolve(this.token);
          
        });
    });
  }
  register(firstname:any,secondname:any,email: any,password: any) {// hacer opcionalmente para email: string y password: string
    // para que nos devuelva una promesa, sintáxis para llamar a apirest

    return new Promise(resolve => {

        // <any>: para crearnos una interface, por ejemplo: <Usuario>
        this.http.post<any>('http://127.0.0.1:8000/api/register',
        {
          firstname:firstname,
          secondname:secondname,
          email: email,
          password: password,
          
          
        }).subscribe(success => {// raul@raul.com devuelve los datos a quien llame a esta función
          
          console.log(success)
          resolve(success);
          
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

  createPJ(name:any,level:any,alignment:any,STR:any,DEX:any,CON:any,INTE:any,WIS:any,CHARI:any,user_id:any,background_id:any,race_id:any,category_id:any,)
  {
    return new Promise(resolve => {
      // <any>: para crearnos una interface
      this.http.post<any>('http://127.0.0.1:8000/api/createPJ',
      {
        name: name,
        level: level,
        alignment: alignment,
        STR: STR,
        DEX: DEX,
        CON: CON,
        INTE: INTE,
        WIS: WIS,
        CHARI: CHARI,
        user_id: user_id,
        category_id: category_id,
        race_id: race_id,
        background_id: background_id,

      }).subscribe(data => {

        console.log(data);

        resolve(data);

      });
  });
}
deletePJ(id:any)
  {
    return new Promise(resolve => {
      // <any>: para crearnos una interface
      this.http.post<any>('http://127.0.0.1:8000/api/deletePJ',
      {
        id: id

      }).subscribe(data => {

        console.log(data);

        resolve(data);

      });
  });
}
backgrounds() {// hacer opcionalmente para email: string y password: string
  // para que nos devuelva una promesa, sintáxis para llamar a apirest

  return new Promise(resolve => {

    this.http.get('http://127.0.0.1:8000/api/backgrounds', {
      
      
    }).subscribe(data => {
      
      resolve(data);
      console.log(data);
    }, err => {
      console.log('Error, '+err);
    });
  });
}
PJs() {// hacer opcionalmente para email: string y password: string
  // para que nos devuelva una promesa, sintáxis para llamar a apirest

  return new Promise(resolve => {

    this.http.get('http://127.0.0.1:8000/api/PJs', {
      
      
    }).subscribe(data => {
      
      resolve(data);
      console.log(data);
    }, err => {
      console.log('Error, '+err);
    });
  });
}
races() {// hacer opcionalmente para email: string y password: string
  // para que nos devuelva una promesa, sintáxis para llamar a apirest

  return new Promise(resolve => {

    this.http.get('http://127.0.0.1:8000/api/races', {
      
      
    }).subscribe(data => {
      
      resolve(data);
      console.log(data);
    }, err => {
      console.log('Error, '+err);
    });
  });
}
categories() {// hacer opcionalmente para email: string y password: string
  // para que nos devuelva una promesa, sintáxis para llamar a apirest

  return new Promise(resolve => {

    this.http.get('http://127.0.0.1:8000/api/categories', {
      
      
    }).subscribe(data => {
      
      resolve(data);
      console.log(data);
    }, err => {
      console.log('Error, '+err);
    });
  });
}
events() {// hacer opcionalmente para email: string y password: string
  // para que nos devuelva una promesa, sintáxis para llamar a apirest

  return new Promise(resolve => {

    this.http.get('http://127.0.0.1:8000/api/events', {
      
      
    }).subscribe(data => {
      
      resolve(data);
      console.log(data);
    }, err => {
      console.log('Error, '+err);
    });
  });
}
eventsL() {

  return new Promise(resolve => {

    this.http.get('http://127.0.0.1:8000/api/eventsList', {
      
      
    }).subscribe(data => {
  
      resolve(data);
      console.log(data);
    }, err => {
      console.log('Error, '+err);
    });
  });
}
rate(user_id:any, event_id:any,rate:any,commentary:any) {// hacer opcionalmente para email: string y password: string
  // para que nos devuelva una promesa, sintáxis para llamar a apirest

  return new Promise(resolve => {

    this.http.post('http://127.0.0.1:8000/api/rate', {
      
      user_id: user_id,
      event_id: event_id,
      rate: rate,
      commentary: commentary,
      
    }).subscribe(data => {
      
      resolve(data);
      console.log(data);
    }, err => {
      console.log('Error, '+err);
    });
  });
}
inscribe(user_id:any, event_id:any) {// hacer opcionalmente para email: string y password: string
  // para que nos devuelva una promesa, sintáxis para llamar a apirest

  return new Promise(resolve => {

    this.http.post('http://127.0.0.1:8000/api/inscribe', {
      
      user_id: user_id,
      event_id: event_id,
      
    }).subscribe(data => {
      
      resolve(data);
      console.log(data);
    }, err => {
      console.log('Error, '+err);
    });
  });
}
}
