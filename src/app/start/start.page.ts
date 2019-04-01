import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';
import {ModalController} from '@ionic/angular';
import {PopoverController} from '@ionic/angular';

import {ModalPage} from '../modal/modal.page';
import {PopoverPage} from '../popover/popover.page';

import {debounceTime} from 'rxjs/operators';
import {DistrictsService} from '../services/districts.service';
import {DistrictsModel} from '../models/districts.model';
import {WeatherService} from '../services/weather.service';

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
        effect: 'flip',
        centeredSlides: false,
        slidesPerView: 1.5,
    };

    Username: string;
    location = 'Corozal';

    weather: any;
    temp: any;
    icon: any;
    condition: any;

    districts: DistrictsModel[] = [];
    searching = '';
    hideDistricts = true;

    restaurant = [
        {
            name: '',
            directions: '',
            phone: 0,
            open: '',
            close: '',
            img: '',
        }
    ];

    hotels = [
        {
            name: 'Sapphire Beach Resort',
            directions: '10 Miles North of San Pedro Town, Ambergris Caye',
            phone: 6712553,
            price: 241,
            img: 'hotels/sanpedro/sap.jpg',
        }
    ];

    constructor(
        private route: ActivatedRoute,
        private modalController: ModalController,
        private popoverController: PopoverController,
        private districtService: DistrictsService,
        private nav: NavController,
        private weatherService: WeatherService) {

        this.districtService.getDistricts()
            .subscribe(resp => this.districts = resp);
        this.weatherService.getWeather(this.location)
            .subscribe(resp => {
                    this.weather = resp;
                    this.temp = Math.round(this.weather.current.temp_f);
                    this.icon = this.weather.current.condition.icon;
                    this.condition = this.weather.current.condition.text;
                    console.log(this.weather);
                }
            );
    }


    ngOnInit() {
        this.Username = this.route.snapshot.paramMap.get('name');
        this.Username = this.Username.toLowerCase();
        this.Username = this.Username.charAt(0).toUpperCase() + this.Username.slice(1);
        this.getRestaurants();
        this.getHotels();
    }

    getWeatherReload() {
        this.weatherService.getWeather(this.location)
            .subscribe(resp => {
                    this.weather = resp;
                    this.temp = Math.round(this.weather.current.temp_f);
                    this.icon = this.weather.current.condition.icon;
                    this.condition = this.weather.current.condition.text;
                    console.log(this.weather);
                }
            );
    }

    // detects scrolling
    // onScroll($event: CustomEvent<ScrollDetail>) {
    //     this.scrollDtl = $event.detail.scrollTop;
    //     if (this.scrollDtl > 115) {
    //         this.hideHeader = true;
    //     } else {
    //         this.hideHeader = false;
    //     }
    //     if (this.scrollDtl < this.scrollEnd) {
    //         this.hideHeader = false;
    //     }
    // }

    // checks when scrolling has ended
    // endScroll() {
    //     this.scrollEnd = this.scrollDtl;
    // }

    // gets the text you are typing in the searchbar
    searchPlace(event) {
        debounceTime(0.5);
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

    goToRestaurants() {
        this.nav.navigateForward('restaurants/' + this.location);
    }

    goToHotels() {
        this.nav.navigateForward('hotels/' + this.location);
    }


    async presentModal() {
        const modal = await this.modalController.create({
            component: ModalPage,
            componentProps: {value: 123}
        });
        return await modal.present();
    }

    async presentPopover(ev: any, index) {
        let name = this.restaurant[index].name;
        let direction = this.restaurant[index].directions;
        let img = this.restaurant[index].img;
        let phone = this.restaurant[index].phone;

        const popover = await this.popoverController.create({
            component: PopoverPage,
            componentProps: {
                name: name,
                direction: direction,
                img: img,
                phone: phone,
            },
            event: ev,
            translucent: true,
            animated: true,
            showBackdrop: false,
        });
        return await popover.present();
    }

    getRestaurants() {
        switch (this.location) {
            case 'Ambergris Caye':
                this.restaurant = [
                    {
                        name: 'El Fogon Restaurant',
                        directions: '#2 trigger fish street, San Pedro, Ambergris Caye',
                        phone: 2062121,
                        open: '11am',
                        close: '9pm',
                        img: 'Restaurants/SanPedro/el.jpg',
                    },
                    {
                        name: 'Hidden Treasure Restaurant',
                        directions: 'San Pedro',
                        phone: 2264111,
                        open: '5am',
                        close: '9pm',
                        img: 'Restaurants/SanPedro/hidden.jpg',
                    },
                    {
                        name: 'Elvi\'s Kitchen',
                        directions: 'Pescador Dr, San Pedro',
                        phone: 2262176,
                        open: '11am',
                        close: '10pm',
                        img: 'Restaurants/SanPedro/elvis.jpg',
                    }
                ];
                break;
            case 'Caye Caulker':
                this.restaurant = [
                    {
                        name: 'Godfrey\'s Seaside Grill',
                        directions: 'Caye Caulker Playa Asuncion, Caye Caulker',
                        phone: 6291077,
                        open: '8am',
                        close: '9pm',
                        img: 'Restaurants/cayecaulker/godf.jpg',
                    },
                    {
                        name: 'Crepes & Dreams',
                        directions: 'Hicaco Avenida, front street, Caye Caulker',
                        phone: 6704870,
                        open: '7am',
                        close: '1pm',
                        img: 'Restaurants/cayecaulker/crep.jpg',
                    },
                    {
                        name: 'Chef Juan\'s Kitchen and Pastries',
                        directions: '64 Crocodile Street, Caye Caulker',
                        phone: 0,
                        open: '7am',
                        close: '8:30pm',
                        img: 'Restaurants/cayecaulker/chef.jpg',
                    }
                ];
                break;
            case 'San Ignacio':
                this.restaurant = [
                    {
                        name: 'The Guava Limb Restaurant & Café',
                        directions: 'Burns Avenue, San Ignacio',
                        phone: 8244837,
                        open: '11am',
                        close: '10pm',
                        img: 'Restaurants/sanignacio/the.jpg',
                    },
                    {
                        name: 'Ko-Ox Han Nah (Let\'s Go Eat)',
                        directions: '#5, Burns Avenue, San Ignacio',
                        phone: 8243014,
                        open: '6am',
                        close: '9pm',
                        img: 'Restaurants/sanignacio/ko.jpg',
                    },
                    {
                        name: 'Hode\'s Place',
                        directions: 'Savannah St, San Ignacio',
                        phone: 8042522,
                        open: '8am',
                        close: '9:30pm',
                        img: 'Restaurants/sanignacio/hode.jpg',
                    }
                ];
                break;
            case 'Placencia':
                this.restaurant = [
                    {
                        name: 'Dawn\'s Grill',
                        directions: 'Placencia Rd, Placencia',
                        phone: 5234079,
                        open: '7am',
                        close: '9pm',
                        img: 'Restaurants/placencia/daw.jpg',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    }
                ];
                break;
            case 'Hopkins':
                this.restaurant = [
                    {
                        name: 'Geckos Restaurant',
                        directions: '100 North Road North Hopkins, Belize, Hopkins',
                        phone: 6295411,
                        open: '12',
                        close: '9pm',
                        img: 'Restaurants/hopkins/geck.jpg',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    }
                ];
                break;
            case 'Belize City':
                this.restaurant = [
                    {
                        name: 'Celebrity Restaurant & Bar',
                        directions: 'Marine Parade Blvd, Belize City',
                        phone: 2237272,
                        open: '11am',
                        close: '11pm',
                        img: 'Restaurants/bzcity/cel.jpg',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    }
                ];
                break;
            case 'Glover\'s Reef':
                this.restaurant = [
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: 'Restaurants/',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    }
                ];
                break;
            case 'Orange Walk':
                this.restaurant = [
                    {
                        name: 'Nahil Mayab Restaurant and Patio',
                        directions: 'Guadalupe St, Orange Walk',
                        phone: 3220831,
                        open: '11am',
                        close: '11pm',
                        img: 'Restaurants/orangewalk/nah.jpg',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    }
                ];
                break;
            case 'Toledo':
                this.restaurant = [
                    {
                        name: 'Asha\'s Culture Kitchen',
                        directions: '74 Front St, Punta Gorda',
                        phone: 7222742,
                        open: '11am',
                        close: '12am',
                        img: 'Restaurants/toledo/ash.jpg',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        img: '',
                    }
                ];
                break;
            case 'Corozal':
                this.restaurant = [
                    {
                        name: 'Scottys Crocodile Cove',
                        directions: 'Corozal',
                        phone: 4220005,
                        open: '10am',
                        close: '12pm',
                        img: 'Restaurants/Corozal/czscottys.jpg',
                    },
                    {
                        name: 'Wood House Restaurant and Bar',
                        directions: '1st Ave, Corozal',
                        phone: 6360209,
                        open: '11am',
                        close: '11:45pm',
                        img: 'Restaurants/Corozal/wood.jpg',
                    },
                    {
                        name: 'Al\'s Cafe',
                        directions: '5th Ave, Corozal',
                        phone: 4223654,
                        open: '8am',
                        close: '6pm',
                        img: 'Restaurants/Corozal/als.jpg',
                    }
                ];
                break;
        }
    }

    getHotels() {
        switch (this.location) {
            case 'Ambergris Caye':
                this.hotels = [
                    {
                        name: 'Sapphire Beach Resort',
                        directions: '10 Miles North of San Pedro Town, Ambergris Caye',
                        phone: 6712553,
                        price: 241,
                        img: 'hotels/sanpedro/sap.jpg',
                    },
                    {
                        name: 'Royal Caribbean Resort',
                        directions: 'San Pedro',
                        phone: 2264220,
                        price: 196,
                        img: 'hotels/sanpedro/roy.jpg',
                    },
                    {
                        name: 'Banana Beach Resort',
                        directions: 'Coconut Dr, San Pedro',
                        phone: 2263890,
                        price: 223,
                        img: 'hotels/sanpedro/ban.jpg',
                    }
                ];
                break;
            case 'Caye Caulker':
                this.hotels = [
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        price: 0,
                        img: 'hotels/',
                    }
                ];
                break;
            case 'San Ignacio':
                this.hotels = [
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        price: 0,
                        img: 'hotels/',
                    }
                ];
                break;
            case 'Placencia':
                this.hotels = [
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        price: 0,
                        img: 'hotels/',
                    }
                ];
                break;
            case 'Hopkins':
                this.hotels = [
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        price: 0,
                        img: 'hotels/',
                    }
                ];
                break;
            case 'Belize City':
                this.hotels = [
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        price: 0,
                        img: 'hotels/',
                    }
                ];
                break;
            case 'Glover\'s Reef':
                this.hotels = [
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        price: 0,
                        img: 'Restaurants/',
                    }
                ];
                break;
            case 'Orange Walk':
                this.hotels = [
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        price: 0,
                        img: 'hotels/',
                    }
                ];
                break;
            case 'Toledo':
                this.hotels = [
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        price: 0,
                        img: 'hotels/',
                    }
                ];
                break;
            case 'Corozal':
                this.hotels = [
                    {
                        name: 'Mirador Hotel',
                        directions: '4th Avenue 2nd Street South Corozal Town, Corozal',
                        phone: 4220189,
                        price: 91,
                        img: 'hotels/corozal/mir.jpg',
                    },
                    {
                        name: 'Las Palmas Hotel',
                        directions: 'Corozal',
                        phone: 4220196,
                        price: 176,
                        img: 'hotels/corozal/las.jpg',
                    },
                    {
                        name: 'Hotel Maya',
                        directions: 'Corozal',
                        phone: 4222082,
                        price: 110,
                        img: 'hotels/corozal/hot.jpg',
                    }
                ];
                break;
        }
    }
}
