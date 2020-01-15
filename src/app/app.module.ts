import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer/reducer';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, StoreModule.forRoot({
      tutorial: reducer
    }) ],
  declarations: [ AppComponent, HelloComponent, ReadComponent, WriteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
