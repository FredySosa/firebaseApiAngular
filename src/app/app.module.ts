import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { RoutesModule } from './routes.module';
import {HeroeService} from './services/heroe.service';

import {FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {KeysPipe} from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
