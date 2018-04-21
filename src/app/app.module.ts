import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { messageReducer } from './message/store/message.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      messages: messageReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
