import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Heroe} from '../modelos/heroe.model';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

const baseURL = 'https://api-angular.firebaseio.com/heroes';

@Injectable()
export class HeroeService {

  constructor(private _http: HttpClient) {
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders(
      {'Content-type': 'application/json'}
    );
  }

  creaHeroe(heroe: Heroe): Observable<any> {

    const hero = JSON.stringify(heroe);

    return this._http.post(baseURL + '.json', hero, {headers: this.getHeaders()})
      .map((data: any) => {
          return data.name;
        }
      );
  }


  actualizaHeroe(heroe: Heroe, key: string): Observable<any> {
    const hero = JSON.stringify(heroe);

    return this._http.put(baseURL + `/${key}.json`, hero, {headers: this.getHeaders()});

  }

  getHeroe(key: string): Observable<any> {
    return this._http.get(baseURL + `/${key}.json`, {headers: this.getHeaders()});
  }

  getHeroes(): Observable<any> {
    return this._http.get(baseURL + '.json', {headers: this.getHeaders()});
  }

  eliminarHeroe(key: string): Observable<any> {
    return this._http.delete(baseURL + `/${key}.json`, {headers: this.getHeaders()});
  }

}
