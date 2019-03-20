import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    name = '';

    constructor(private nav: NavController) {
    }

    goToHome() {
        this.nav.navigateRoot('start/' + this.name);
    }

}
