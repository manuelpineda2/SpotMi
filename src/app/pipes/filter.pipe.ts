import { Pipe, PipeTransform } from '@angular/core';
import {DistrictsModel} from '../models/districts.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(districts: DistrictsModel[], texto: string): DistrictsModel[] {

    if (texto.length === 0) {
      return districts;
    }

    texto = texto.toLowerCase();

    return districts.filter( district => {
      return district.title.toLowerCase().includes(texto);
    });


  }

}
