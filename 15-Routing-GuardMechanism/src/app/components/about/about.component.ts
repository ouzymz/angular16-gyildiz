import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  photos;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (data: any) => this.photos = data['data'] //resolving isleminde atanan property neyse '' tirnak icinde onun verilmesi gerekir.  
    );
    console.log(this.photos);
    
  }
}
