import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleSearch'
})
export class SimpleSearchpipePipe implements PipeTransform {

  transform(items: any, term?: any): any {
    if (!items) return null;
    if (!term) return null;

    term = term.toLowerCase();

    return items.filter((item: any)=>{
      return JSON.stringify(item).toLowerCase().includes(term);
    })
  }

}
