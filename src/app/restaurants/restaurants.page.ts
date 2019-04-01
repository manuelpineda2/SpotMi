import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CallNumber} from '@ionic-native/call-number/ngx';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {File} from '@ionic-native/file/ngx';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.page.html',
    styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

    location: string;

    name: string;
    img: string;

    restaurant = [
        {
            name: '',
            directions: '',
            phone: 0,
            open: '',
            close: '',
            description: '',
            img: 'Restaurants/',
        }
    ];


    constructor(private route: ActivatedRoute, private callNumber: CallNumber, private socialSharing: SocialSharing, private file: File) {
    }

    ngOnInit() {
        this.location = this.route.snapshot.paramMap.get('location');
        this.getRestaurants();
    }


    call(index) {
        let numb = this.restaurant[index].phone;
        console.log(this.callNumber.callNumber(`${numb}`, true));
    }

    regshare(index) {

        let msg = this.restaurant[index].name;
        let image = 'assets/www/' + this.restaurant[index].img;

        console.log(msg);
        console.log(image);

        this.socialSharing.share(`${msg}`, null, `${image}`, null).then(() => {
        }).catch((error) => {

            alert(error);

        });

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
                        description: 'Ethnic restaurant',
                        img: 'Restaurants/SanPedro/el.jpg',
                    },
                    {
                        name: 'Hidden Treasure Restaurant',
                        directions: 'San Pedro',
                        phone: 2264111,
                        open: '5am',
                        close: '9pm',
                        description: 'Restaurant',
                        img: 'Restaurants/SanPedro/hidden.jpg',
                    },
                    {
                        name: 'Elvi\'s Kitchen',
                        directions: 'Pescador Dr, San Pedro',
                        phone: 2262176,
                        open: '11am',
                        close: '10pm',
                        description: 'Central American restaurant',
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
                        description: 'Restaurant',
                        img: 'Restaurants/cayecaulker/godf.jpg',
                    },
                    {
                        name: 'Crepes & Dreams',
                        directions: 'Hicaco Avenida, front street, Caye Caulker',
                        phone: 6704870,
                        open: '7am',
                        close: '1pm',
                        description: 'Restaurant',
                        img: 'Restaurants/cayecaulker/crep.jpg',
                    },
                    {
                        name: 'Chef Juan\'s Kitchen and Pastries',
                        directions: '64 Crocodile Street, Caye Caulker',
                        phone: 0,
                        open: '7am',
                        close: '8:30pm',
                        description: 'Restaurant',
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
                        description: 'Restaurant',
                        img: 'Restaurants/sanignacio/the.jpg',
                    },
                    {
                        name: 'Ko-Ox Han Nah (Let\'s Go Eat)',
                        directions: '#5, Burns Avenue, San Ignacio',
                        phone: 8243014,
                        open: '6am',
                        close: '9pm',
                        description: 'Restaurant',
                        img: 'Restaurants/sanignacio/ko.jpg',
                    },
                    {
                        name: 'Hode\'s Place',
                        directions: 'Savannah St, San Ignacio',
                        phone: 8042522,
                        open: '8am',
                        close: '9:30pm',
                        description: 'Restaurant',
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
                        description: 'Restaurant',
                        img: 'Restaurants/placencia/daw.jpg',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
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
                        description: 'Restaurant',
                        img: 'Restaurants/hopkins/geck.jpg',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
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
                        description: 'Restaurant',
                        img: 'Restaurants/bzcity/cel.jpg',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
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
                        description: 'Restaurant',
                        img: 'Restaurants/',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
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
                        description: 'Restaurant',
                        img: 'Restaurants/orangewalk/nah.jpg',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
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
                        description: 'Restaurant',
                        img: 'Restaurants/toledo/ash.jpg',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
                        img: '',
                    },
                    {
                        name: '',
                        directions: '',
                        phone: 0,
                        open: '',
                        close: '',
                        description: '',
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
                        description: 'Restaurant',
                        img: 'Restaurants/Corozal/czscottys.jpg',
                    },
                    {
                        name: 'Wood House Restaurant and Bar',
                        directions: '1st Ave, Corozal',
                        phone: 6360209,
                        open: '11am',
                        close: '11:45pm',
                        description: 'Restaurant',
                        img: 'Restaurants/Corozal/wood.jpg',
                    },
                    {
                        name: 'Al\'s Cafe',
                        directions: '5th Ave, Corozal',
                        phone: 4223654,
                        open: '8am',
                        close: '6pm',
                        description: 'Restaurant',
                        img: 'Restaurants/Corozal/als.jpg',
                    }
                ];
                break;
        }
    }
}
