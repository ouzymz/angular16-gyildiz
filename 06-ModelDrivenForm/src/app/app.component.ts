import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onSubmit() {
    console.log(this.frm.value);
  }

  onSubmit2() {
    console.log(this.frm2.value);
  }

  isValid: boolean = false;

  isValidCheck() {
    this.isValid = this.frm.valid;
    console.log(this.isValid);
  }

  frm: FormGroup;
  frm2: FormGroup;
  //2 farkli form icin farkli formbuilder kullanilmalidir.
  constructor(
    private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder
  ) {
    this.frm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], //coklu validasyonda array kullanilir
    });

    this.frm.statusChanges.subscribe((data) => {
      console.log(data);
    });

    this.frm2 = this.formBuilder2.group({
      name: [''],
      surname: [''],
      email: [''],
      tel: [''],
      adress: this.formBuilder2.group({
        city: [''],
        street: [''],
        zip: [''],
      }),
    });


    //value changes constructor icinde tanimlanir.
    this.frm2.valueChanges.subscribe((data) => {
      console.log(data);
    });

    //yapilan her degisiklikte aktif olarak yakalama yapabiliyoruz. 
  }
}
