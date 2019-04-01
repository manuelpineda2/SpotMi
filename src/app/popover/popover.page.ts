import { Component, OnInit } from '@angular/core';
import {NavParams} from '@ionic/angular';
import {CallNumber} from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  name: null;
  directions: null;
  phone: null;
  img: null;

  constructor(private navParam: NavParams, private callNumber: CallNumber) { }

  ngOnInit() {
      this.name = this.navParam.get('name');
      this.directions = this.navParam.get('direction');
      this.phone = this.navParam.get('phone');
      this.img = this.navParam.get('img');
  }

    call() {
        console.log(this.callNumber.callNumber(this.phone, true));
    }

}
