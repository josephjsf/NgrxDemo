import { Component } from '@angular/core';
import { MessageState } from './message/store/message.store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Message } from './message/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  messages$: Observable<Message[]>;

  constructor(private store: Store<MessageState>) {
    this.messages$ = store.pipe(
      select('messages'), // from forRoot
      map((state: MessageState) => state.messages) // map to message array
    );
  }
}
