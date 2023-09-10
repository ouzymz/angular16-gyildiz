import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customvalidator } from './validators/customvalidator';
import { CustomvalidatorParameter } from './validators/customvalidator-parameter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3),Customvalidator]],
      sirname: ['', [Validators.required, Validators.minLength(3),CustomvalidatorParameter(2)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  //form uzerindeki kontrollere HTML uzerinde rahat bir sekilde ulasabilmek icin property'ler olusturuyoruz.
  //Angular mimarisinde validatorlarin kontrolunde gecersiz veri girisi oldugunda ilgili controller genellikle davranissal olarak erisimi kolay olsun dite property olarak tanimlanirlar.
  get name() {
    return this.frm.get('name');
  }
  get sirname() {
    return this.frm.get('sirname');
  }
  get password() {
    return this.frm.get('password');
  }

  onSubmit() {

  }
}
