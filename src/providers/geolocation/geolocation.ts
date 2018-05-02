import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class GeolocationProvider {
  position:any;
  constructor(private geolocation: Geolocation, public http: HttpClient) {
    console.log('Hello GeolocationProvider Provider');
  }
  // getLocation(){
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //      resp.coords.latitude
  //      resp.coords.longitude
  //    }).catch((error) => {
  //      console.log('Error getting location', error);
  //    });
  //   }

    // find(){
    //   console.log( " func" + this.getLocation())
    // }
}
