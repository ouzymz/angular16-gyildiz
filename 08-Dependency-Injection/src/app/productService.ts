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


@Injectable() //Inject edilebilir bir yapidir anlami tasir ve ihtiyaci olan baska dependency instacelerini yani bagimliliklarini angularin otomatik olarak inject etmesini saglar. Buna ek olarak loggerService'in de istenilen katmanin provider'ina declere edilmesi gerekir.
export class ProductServicesWithLogger{
    constructor(private loggerService:LoggerService ) { loggerService.log("ProductServicesWithLogger instance created"); }
}

export class LoggerService{
    log(message:string){
        console.log(message);
    }
}