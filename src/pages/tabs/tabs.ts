import { Component } from '@angular/core';
import {Storage} from '@ionic/storage';

import { Postlist } from '../postlist/postlist';
import { Categorylist } from '../categorylist/categorylist';
import { UserInfo } from '../user-info/user-info';
import { NavParams } from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  name:string;
  index: string;
  tab1Root = Postlist;
  tab2Root = Categorylist;
  tab3Root = UserInfo;

  constructor(public navParams: NavParams, private storage:Storage) {
    this.index = navParams.get('index');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    }
    
  ionViewWillEnter(){
    this.storage.get("myStatus")
    .then((value) =>
    {
    this.name = value;
    })
    .catch((err) => {
    alert("Error accesssing Storage")
    })
    }
}