import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  _dataDinamic: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    //getCurrentNavigation fonksiyonuna yalnizca contructor uzerinden cagirilabilir.
    let data = router.getCurrentNavigation()?.extras.state;
    this._dataDinamic =data
    console.log(data);
    
  }
  _dataStatic: any;
  ngOnInit(): void {
    //static olarak verilen degerleri alma yontemi.
    this._dataStatic = this.activatedRoute.data.subscribe(
      (data: any) => {this._dataStatic
      console.log(data);
      }
    );
  }
}
