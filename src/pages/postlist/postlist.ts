import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/timeout';
import { LoadingController } from 'ionic-angular';
import {DataProvider} from '../../providers/data/data';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-postlist',
  templateUrl: 'postlist.html',
})
export class Postlist {
  postlists: any[]= [];            
  myName: string;

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, private dp:DataProvider, public loadingCtrl: LoadingController) {//!
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
     this.dp.getData().subscribe(data=>
     {
       this.postlists= data.articles;
     });
   }
}