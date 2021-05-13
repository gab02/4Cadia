import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FormBuilder, FormControl } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  dia: string;
  qtd: string;
  method: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX' },
  { dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX' },
  { dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX' },
  { dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX' },
  { dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX' },
  { dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX' },
  { dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX' },
  { dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX' },
  { dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX' },
  { dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX' },
];

@Component({
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  moneyVisible: boolean = true;
  validado: boolean = false;

  displayedColumns: string[] = ['dia', 'name', 'qtd', 'method'];
  dataSource = ELEMENT_DATA;
  selectControl: FormControl = new FormControl();

  constructor(public app: AppComponent, private formBuilder: FormBuilder) {
    this.app.hasToggledTheme;
    this.app.ValorLogin = true;
  }

  ngOnInit(): void {}
  // https://github.com/luis-ten/validar-cpf/blob/master/validar-cpf.ts }
  // tslint:disable-next-line:typedef
  cpf() {
    let cpf = this.selectControl.value;
    if (cpf == null) {
      console.log('RUIMMMMMM');
      this.selectControl.setValue('');
      this.validado = false;
    }
    if (cpf.length != 11) {
      console.log('RUIMMMMMM');
      this.selectControl.setValue('');
      this.validado = false;
    }
    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf === '88888888888' ||
      cpf == '99999999999'
    ) {
      console.log('RUIMMMMMM');
      this.selectControl.setValue('');
      this.validado = false;
    }
    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);
    for (let i: number = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i);
      if (numeros.search(caracter) == -1) {
        console.log('RUIMMMMMM');
        this.selectControl.setValue('');
        this.validado = false;
      }
      numero = Number(caracter);
      somatorio = somatorio + numero * j;
      j--;
    }
    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
      digito1 = 0;
    }
    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;
    for (let i: number = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      numero = Number(caracter);
      somatorio = somatorio + numero * j;
      j--;
    }
    resto = somatorio % 11;
    digito2 = 11 - resto;
    if (digito2 > 9) {
      digito2 = 0;
    }
    cpfAux = cpfAux + digito2;
    if (cpf != cpfAux) {
      console.log('RUIMMMMMM');
      this.selectControl.setValue('');
      this.validado = false;
    } else {
      this.validado = false;
      console.log('FOOOOOOOOOOI');
      this.selectControl.setValue('');
      this.validado = true;
    }
  }
  money() {
    if (this.moneyVisible === true) {
      this.moneyVisible = false;
    } else {
      this.moneyVisible = true;
    }
  }
}
