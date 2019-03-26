import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.page.html',
    styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

    location: string;

    restaurant = [
        {
            name: '',
            directions: '',
            phone: 0,
            open: 0,
            close: 0,
            img: '',
        }
    ];

    Hotels = [
        {
            name: '',
            directions: '',
            phone: 0,
            open: 0,
            close: 0,
            img: '',
        }
    ];

    constructor( private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.location = this.route.snapshot.paramMap.get('location');
    }

}
