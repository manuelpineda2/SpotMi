import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {PipesModule} from '../pipes/pipes.module';

import {IonicModule} from '@ionic/angular';

import {StartPage} from './start.page';

const routes: Routes = [
    {
        path: '',
        component: StartPage
    }
];

@NgModule({
    imports: [
        PipesModule,
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [StartPage]
})
export class StartPageModule {
}
