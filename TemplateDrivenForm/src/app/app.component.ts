import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  ngDoCheck(): void {
    // console.log(`Form.value : ${this.frm.value}`); //VALUE OF THE FORM(formun submit olmadan da degerlerini alabilmek icin kullanilir.)
  }
  title = 'TemplateDrivenForm';

  @ViewChild('frm', { static: true }) frm: NgForm; // ViewChild is used to access the form fie

  onSubmit(data: object) {
    // console.log(data);
    // console.log(`Form.valid : ${this.frm.valid}`); //validation OF THE FORM(form controllerinin valid durumlarini kontrol eder.)
    // console.log(`Form.touched : ${this.frm.touched}`); //Formun hic degisiklige ugrayip ugramadini test eden mekanima. yazilip silinen bir sey olsa bile loglarda touched true olarak gozukur.
    // console.log(`Form.valid : ${this.frm.submitted}`); //Formun submit edilip edilmedigini kontrol eder.

    console.log(this.frm.form); //Formun icindeki tum controllerlari getirir.
    console.log(this.frm.controls['name'].value);
    console.log(this.frm.controls); //Formun icindeki tum controllerlari getirir.
  }
}
