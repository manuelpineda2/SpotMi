import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrollDetail} from '@ionic/core';
import {ModalController} from '@ionic/angular';
import {PopoverController} from '@ionic/angular';

import {ModalPage} from '../modal/modal.page';
import {PopoverPage} from '../popover/popover.page';

import {debounceTime} from 'rxjs/operators';
import {DistrictsService} from '../services/districts.service';
import {DistrictsModel, layoutModel, RestaurantsModel} from '../models/districts.model';

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

    name: string;
    location = 'Ambergris Caye';

    scrollDtl = 0;
    hideHeader = false;
    scrollEnd = 0;

    districts: DistrictsModel[] = [];
    searching = '';
    hideDistricts = true;
    restaurantService: RestaurantsModel[] = [];
    restaurants: layoutModel[] = [];


    constructor(
        private route: ActivatedRoute,
        private modalController: ModalController,
        private popoverController: PopoverController,
        private districtService: DistrictsService) {

        this.districtService.getDistricts()
            .subscribe(resp => this.districts = resp);
        this.districtService.getRestaurants()
            .subscribe(resp => {
                this.restaurantService = resp;
                console.log(this.restaurantService['Ambergris Caye'][0]);
            });
    }


    ngOnInit() {
        this.name = this.route.snapshot.paramMap.get('name');
        this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
        this.restaurants = this.restaurantService['Ambergris Caye'];
        this.getId();
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

    getId() {
        this.restaurants = this.restaurantService[this.location];
        console.log(this.restaurants);
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
