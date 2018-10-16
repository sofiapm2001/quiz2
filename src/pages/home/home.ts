import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { SmartPage } from '../smart/smart';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bocina = BocinaPage
  tv = TvPage
  smart = SmartPage
  lampara =LamparaPage

  constructor(public navCtrl: NavController) {

  }
  clickbocina(){
    this.navCtrl.push(this.bocina);
  }

  clicktv(){
    this.navCtrl.push(this.tv);
  }
  }
  


