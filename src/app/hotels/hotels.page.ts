import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CallNumber} from '@ionic-native/call-number/ngx';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {File} from '@ionic-native/file/ngx';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {

  location: string;

  hotels = [
    {
      name: '',
      directions: '',
      phone: 0,
      price: 0,
      img: 'Restaurants/',
    }
  ];


  constructor(private route: ActivatedRoute, private callNumber: CallNumber, private socialSharing: SocialSharing, private file: File) {
  }

  ngOnInit() {
    this.location = this.route.snapshot.paramMap.get('location');
    this.getRestaurants();
    this.getHotels();
  }

  call(number) {
    this.callNumber.callNumber(number, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
  }

  async shareFacebook(msg, img) {

    let file = `${this.file.applicationDirectory}src/assets`;

    console.log(msg);
    console.log(`src/assets/` + img);

    this.socialSharing.shareViaFacebook(msg, file, null).then(() => {
    }).catch(() => {
    });

  }

  async shareWhatsApp(msg, img) {

    console.log(`src/assets/` + img);

    this.socialSharing.shareViaWhatsApp(msg, `assets/` + img, null).then(() => {
    }).catch(() => {
    });

  }

  getRestaurants() {
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
