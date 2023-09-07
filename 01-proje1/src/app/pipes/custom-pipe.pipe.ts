import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  // pipe'in kullanildigi degeri manipule/transform etmemizi saglayan fonksiyondur

  //DEFAULT
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string, a:number,b?:number): string {
    return value.slice(a,b);
  }


}
