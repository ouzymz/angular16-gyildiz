import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
    constructor(private activatedRoute:ActivatedRoute){
      
    }

    ngOnInit(): void {
      // this.activatedRoute.queryParamMap.subscribe({next:queryStringParam => console.log(queryStringParam.get('value'))})
    }
}
