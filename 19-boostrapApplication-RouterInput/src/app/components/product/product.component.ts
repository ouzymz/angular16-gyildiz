import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit{
  // ESKIYONTEM
  // constructor(private activatedRoute: ActivatedRoute) {   
    
    // activatedRoute.paramMap.subscribe((params) => {
    //   console.log(params.get('id'));
    // });
    // activatedRoute.data.subscribe((data) => {
    //   console.log(data['productName']);
    // });
    // activatedRoute.data.subscribe((data) => {
    //   console.log(data['products']);
    // });
  // }


  @Input() id :string;
  @Input() productName :string;
  @Input() products :[];

  ngOnInit(): void {
    console.log(this.id);
    console.log(this.productName);
    console.log(this.products);
  }
}
