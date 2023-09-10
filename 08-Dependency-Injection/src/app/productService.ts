import { Injectable } from "@angular/core";

export class ProductService {
  getProducts(): Product[] {
    return [
      { name: 'Apple Iphone 7', quantity: 10 },
      { name: 'Samsung Galaxy S7', quantity: 5 },
    ];
  }
}

//bu sekilde injectable olarak da declere edilebilir. bu sayede app.module.ts'deki providers'a declere etmeye gerek kalmaz.
@Injectable({providedIn: 'root'})
export class InjectableProductService {
    getProducts(): Product[] {
        return [
          { name: 'Apple Iphone 7', quantity: 10 },
          { name: 'Samsung Galaxy S7', quantity: 5 },
        ];
      }
}

export class Product {
  name: string;
  quantity: number;
}


