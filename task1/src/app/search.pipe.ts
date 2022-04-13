
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Name: any, searchItem:any){
    if(!Name || !searchItem){
      return Name ;
    }
  return Name.filter((ele:any)=>{
   return ele.Name.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
  })
  }
}