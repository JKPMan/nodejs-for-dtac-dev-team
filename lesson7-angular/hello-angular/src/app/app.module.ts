import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ItemlistComponent } from './components/itemlist/itemlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
