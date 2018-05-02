import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScienceProvider} from '../../providers/science/science';

/**
 * Generated class for the SciencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-science',
  templateUrl: 'science.html',
})
export class SciencePage {
  science: any[]= []; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private scp:ScienceProvider) {
  }

  ionViewDidLoad() {
    this.scp.getData().subscribe(data=>
    {
      this.science= data.articles;
    });
  }
}