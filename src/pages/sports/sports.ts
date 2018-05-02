import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SportsProvider} from '../../providers/sports/sports';

/**
 * Generated class for the SportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {
  sports: any[]= []; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private sp:SportsProvider) {
  }

  ionViewDidLoad() {
    this.sp.getData().subscribe(data=>
    {
      this.sports= data.articles;
    });
  }

}
