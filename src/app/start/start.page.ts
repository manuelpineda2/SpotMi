import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.name = this.route.snapshot.paramMap.get('name');
        this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }

}
