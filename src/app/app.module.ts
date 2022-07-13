import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Este modulo de HTTP Client nos permite hacer llamadas a un servidor, de tipo APIs.
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './components/card/card.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    CardWrapperComponent,
    NosotrosComponent,
    ContactosComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
