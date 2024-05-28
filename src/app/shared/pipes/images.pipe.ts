import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images',
  standalone: true,
})
export class ImagesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return `http://image.tmdb.org/t/p/w500/${value}`;
  }
}
