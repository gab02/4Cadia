import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fintech';
  showFiller = false;
  ValorLogin: boolean = false;
  hasToggledTheme = false;
  //https://stackblitz.com/edit/dark-theme-so?file=app%2Fapp.component.ts


  constructor(private router: Router){}
ngOnInit(){
  this.ValorLogin = false;
}

inicio(){
  this.router.navigate(['saldo']);
}

login(){
    this.router.navigate(['login']);
    this.ValorLogin = false;

  }
  toggleTheme() {
    this.hasToggledTheme = !this.hasToggledTheme;
  }
}
