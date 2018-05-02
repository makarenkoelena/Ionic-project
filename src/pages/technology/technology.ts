import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TechnologyProvider} from '../../providers/technology/technology';

/**
 * Generated class for the TechnologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {
  technology: any[]= []; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private tp:TechnologyProvider) {
  }

  ionViewDidLoad() {
    this.tp.getData().subscribe(data=>
    {
      this.technology= data.articles;
    });
  }

}
