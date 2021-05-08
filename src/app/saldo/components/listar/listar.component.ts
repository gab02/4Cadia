import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

export interface PeriodicElement {
  name: string;
  dia: string;
  qtd: string;
  method: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX'},
  {dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX'},
  {dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX'},
  {dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX'},
  {dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX'},
  {dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX'},
  {dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX'},
  {dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX'},
  {dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX'},
  {dia: '07/05/2021', name: 'Jorge', qtd: '100.000,00', method: 'PIX'},
];

@Component({
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
moneyVisible: boolean = true;
displayedColumns: string[] = ['dia', 'name', 'qtd', 'method'];
  dataSource = ELEMENT_DATA;
constructor(public app: AppComponent) {
  this.app.hasToggledTheme;
  this.app.ValorLogin = true;
}

  ngOnInit(): void {
  }
money(){
  if(this.moneyVisible === true){
    this.moneyVisible = false;
  }else{
    this.moneyVisible = true;
  }
}
}
