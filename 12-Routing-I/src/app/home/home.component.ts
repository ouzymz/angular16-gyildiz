import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string;
  observableSample: any;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.snapshot.paramMap.has('title')
      ? (this.title = this.activatedRoute.snapshot.paramMap.get('title'))
      : (this.title = 'Has no title');

    // activatedRoute.snapshot.params["title"]; //Bu sekilde de parametre degeri okunabilir.
  }

  //Observable kullanarak degerlere ulasma
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        this.observableSample = param.get('title');
        console.log(param.get('title'));
      },
    });


    //PARAMS KULLANILIRSA PARAMS'A SUBSCRIBE OLMAK GEREKIR. 
    // this.activatedRoute.params.subscribe({
    //   next: (param) => {
    //     this.observableSample = param['title'];
    //     console.log(param['title']);
    //   },
    // });
  }
}
