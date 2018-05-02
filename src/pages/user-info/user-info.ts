import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfo {
name:string;
newName: string;

latitude:number;
longitude:number;
newLatitude: any;
newLongitude: any;
  constructor(private geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }
     saveName(){
     this.storage.set("myName", this.name);
    this.storage.get("myName")
    .then((value) => {  
      this.newName = value;
    })
    .catch((err) => {
    alert("Error accesssing Storage")
    })
     }
    
    ionViewDidLoad() {
     console.log('ionViewDidLoad AuthorlistPage');
     }
  
     ionViewWillEnter(){
     this.storage.get("myName")
     .then((value) => {  
       this.newName = value;
     })
     .catch((err) => {
     alert("Error accesssing Storage")
     })
     }

    //  setLatitude(latitude: number) {
    //   this.storage.set('latitude', latitude);
    // }
  
    // getLatitude() {
    //   return this.storage.get('latitude').then((value) => {
    //     this.newLatitude = value;
    //   });
    // }
  
    // setLongitude(longitude: number) {
    //   this.storage.set('longitude', longitude);
    // }
  
    // getLongitude() {
    //   return this.storage.get('longitude').then((value) => {
    //     this.newLongitude = value;
    //   });
    // }
    getLocation(){
      this.geolocation.getCurrentPosition().then((resp) => {
        this.newLatitude = resp.coords.latitude
        this.newLongitude = resp.coords.longitude
       }).catch((error) => {
         console.log('Error getting location', error);
       });
      }
     
     find(){
         this.newLatitude = this.getLocation();
         this.newLongitude = this.getLocation();
     }
}