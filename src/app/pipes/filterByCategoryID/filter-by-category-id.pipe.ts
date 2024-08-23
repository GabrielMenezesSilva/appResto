import { Pipe, PipeTransform } from '@angular/core';
import { RestoCategorie } from '../../interfaces';

@Pipe({
  name: 'filterByCategoryID',
  standalone: true
})
export class FilterByCategoryIDPipe implements PipeTransform {

  transform(value: RestoCategorie[]| null, selectedCategoryId: string): RestoCategorie[] {
    return  value?.filter(item => item.uuid === selectedCategoryId)||[];
  }

}
