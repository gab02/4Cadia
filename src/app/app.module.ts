import { RegisterRoutingModule } from './register/register-routing.module';
import { ExtratoModule } from './extrato/extrato.module';
import { ExtratoRoutingModule } from './extrato/extrato-routing.module';
import { LoginModule } from './login/login.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { RegisterModule } from './register/register.module';
import { SaldoModule,SaldoRoutingModule } from './saldo';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SaldoRoutingModule,
    SaldoModule,
    RegisterRoutingModule,
    RegisterModule,
    LoginRoutingModule,
    LoginModule,
    ExtratoRoutingModule,
    ExtratoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
