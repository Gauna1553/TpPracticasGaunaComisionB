import { NgModule } from '@angular/core';
import {BrowserModule, platformBrowser} from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { TotalComponent } from './components/total/total.component';
import { AddItemComponent } from './components/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemComponent,
    TotalComponent,
    AddItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    platformBrowser,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
