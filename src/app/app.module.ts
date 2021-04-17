import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoitemsComponent } from './todoitems/todoitems.component';
import { TodoitemDetailComponent } from './todoitem-detail/todoitem-detail.component';
import { ErrormessagesComponent } from './errormessages/errormessages.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoitemsComponent,
    TodoitemDetailComponent,
    ErrormessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
