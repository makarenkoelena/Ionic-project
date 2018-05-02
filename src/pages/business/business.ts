import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BusinessProvider} from '../../providers/business/business';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {
  business: any[]= []; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private bp:BusinessProvider) {
  }

  ionViewDidLoad() {
    this.bp.getData().subscribe(data=>
    {
      this.business= data.articles;
    });
  }

}
