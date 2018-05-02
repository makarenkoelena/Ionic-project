import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
/*
  Generated class for the ScienceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScienceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ScienceProvider Provider');
  }
  getData():Observable <any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=ie&category=science&apiKey=42555358e8a640588cbb4b2f3ee1d72c");
  }
}
