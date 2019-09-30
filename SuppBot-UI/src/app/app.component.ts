import { Component, OnInit } from '@angular/core';
import { ConversationMessage } from './model/conversation-message.dto';
import { GlobalService } from './service/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private globalService: GlobalService) {

  }

  textMessage = '';
  context: any;
  message: ConversationMessage = new ConversationMessage();

  ngOnInit(): void {
    this.sendConversationMessage();
  }



  inputKeyDown(event) {

    if (event.keyCode === 13) {

      this.message.input = { 'text': this.textMessage };
      // this.message.context = this.context;
      this.textMessage = '';
      this.sendConversationMessage();
    }
  }


  sendConversationMessage() {
    this.globalService.sendConversationMessage(this.message).subscribe(response => {
      this.message.context = response.context;

    });

  }
}
