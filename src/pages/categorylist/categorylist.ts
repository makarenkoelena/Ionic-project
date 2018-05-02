import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SportsPage} from './../sports/sports';
import {SciencePage} from './../science/science';
import {TechnologyPage} from './../technology/technology';
import {BusinessPage} from './../business/business';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'page-categorylist',
  templateUrl: 'categorylist.html',
})
export class Categorylist {
  myName: string;
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
    this.storage.get("myName")
  .then((data)=>
{
  this.myName = data;
})
.catch((err)=>{
  alert("Error accesing storage")
})
  }
   ionViewDidLoad() {
     console.log('ionViewDidLoad Categorylist');
   }
  
  openSports(){
    this.navCtrl.push(SportsPage);
  }

  openScience(){
    this.navCtrl.push(SciencePage);
  }

  openTechnology(){
    this.navCtrl.push(TechnologyPage);
  }

  openBusiness(){
    this.navCtrl.push(BusinessPage);
  }
}
