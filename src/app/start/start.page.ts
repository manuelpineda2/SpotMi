import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrollDetail} from '@ionic/core';
import {ModalController} from '@ionic/angular';
import {PopoverController} from '@ionic/angular';

import {ModalPage} from '../modal/modal.page';
import {PopoverPage} from '../popover/popover.page';

import {debounceTime} from 'rxjs/operators';
import {DistrictsService} from '../services/districts.service';
import {DistrictsModel} from '../models/districts.model';

@Component({
    selector: 'app-start',
    templateUrl: './start.page.html',
    styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

    slideOpts = {
        effect: 'flip',
        centeredSlides: true,
        slidesPerView: 2,
    };

    slide2Opts = {
        effect: 'fade',
        centeredSlides: true,
        slidesPerView: 1.3,
    };

    Username: string;
    location: string;

    scrollDtl = 0;
    hideHeader = false;
    scrollEnd = 0;

    districts: DistrictsModel[] = [];
    searching = '';
    hideDistricts = true;


    constructor(
        private route: ActivatedRoute,
        private modalController: ModalController,
        private popoverController: PopoverController,
        private districtService: DistrictsService) {

        this.districtService.getDistricts()
            .subscribe(resp => this.districts = resp);
    }


    ngOnInit() {
        this.Username = this.route.snapshot.paramMap.get('name');
        this.Username = this.Username.toLowerCase();
        this.Username = this.Username.charAt(0).toUpperCase() + this.Username.slice(1);
    }

    // detects scrolling
    onScroll($event: CustomEvent<ScrollDetail>) {
        this.scrollDtl = $event.detail.scrollTop;
        if (this.scrollDtl > 115) {
            this.hideHeader = true;
        } else {
            this.hideHeader = false;
        }
        if (this.scrollDtl < this.scrollEnd) {
            this.hideHeader = false;
        }
    }

    // checks when scrolling has ended
    endScroll() {
        this.scrollEnd = this.scrollDtl;
    }

    // gets the text you are typing in the searchbar
    searchPlace(event) {
        debounceTime(1);
        const texto = event.target.value;
        this.searching = texto;
    }

    // flag that i've touched the searchbar
    clickedSearch() {
        this.hideDistricts = false;
    }

    // flag that i've touched outside the card
    hasCancelledSearch() {
        this.hideDistricts = true;
    }

    // sets location based on option you chose on the searchbar
    setLocation(location) {
        this.location = location;
    }


    async presentModal() {
        const modal = await this.modalController.create({
            component: ModalPage,
            componentProps: {value: 123}
        });
        return await modal.present();
    }

    async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverPage,
            event: ev,
            translucent: true,
            animated: true,
            showBackdrop: false,
        });
        return await popover.present();
    }
}
