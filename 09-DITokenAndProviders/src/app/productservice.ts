export class Product {
  name: string;
  quantity: number;
}

export class ProductService {
  getProducts(): Product[] {
    return [
      { name: 'Apple Iphone 7', quantity: 10 },
      { name: 'Samsung Galaxy S7', quantity: 5 },
    ];
  }
}
