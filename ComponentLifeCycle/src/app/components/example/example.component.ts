import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  
  @Input()
  input: string;

  data: string;

  doCheckCounter = 0;
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`1. ngOnChanges is triggered! \n input : ${this.input}` );
  }
  
  ngOnInit(): void {
    console.log(`2. ngOnInit is triggered! \n input : ${this.input}` );
  }
  
  //Componentler changedetection prinsiblerine gore calisir.
  ngDoCheck(): void {
    this.doCheckCounter++;
    console.log(`3. ngDoCheck is triggered! \n input : ${this.input} - DoCheckCounter : ${this.doCheckCounter}` );
  }

  ngAfterContentInit(): void {
    console.log(`4. ngAfterContentInit is triggered! ` );
  }

  ngAfterContentChecked(): void {
    console.log(`5. ngAfterContentChecked is triggered! ` );

  }
  
  ngAfterViewInit(): void {
    console.log(`6. ngAfterViewInit is triggered! ` );
  }

  ngAfterViewChecked(): void {
    console.log(`7. ngAfterViewChecked is triggered! ` );
  }

  ngOnDestroy(): void {
    console.log(`8. ngOnDestroy is triggered! ` );

  }
  
}
