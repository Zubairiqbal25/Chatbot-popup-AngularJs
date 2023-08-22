import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-pop-up',
  templateUrl: './chat-pop-up.component.html',
  styleUrls: ['./chat-pop-up.component.scss']
})
export class ChatPopUpComponent {
  constructor(private fb: FormBuilder){
  }
  ngOnInit() {
    window.scrollTo(0,document.body.scrollHeight);
  }
  private scrollContainer: any;
  isLow:boolean = true;
  
  SendMessage : FormGroup = this.fb.group({
    Message: ['', [Validators.required]],
  });
  messageItem:any;
  Messages:any = [
    {"IsRecieve" : true, "Message": "Hi!"},
    {"IsRecieve" : false, "Message": "Hi bro"},
    {"IsRecieve" : true, "Message": "How are you"},
    {"IsRecieve" : false, "Message": "I'm fine"},
    
    {"IsRecieve" : true, "Message": "Nice"},
    {"IsRecieve" : true, "Message": "You look good"},
    {"IsRecieve" : false, "Message": "Thanks"},
    {"IsRecieve" : false, "Message": "you too"},

  ];

  toggleOpacity(){
    this.isLow = !this.isLow;
  }
  onSendMessage(){
    //alert(this.SendMessage.value["Message"]);  
    this.messageItem = {"IsRecieve" : false, "Message": this.SendMessage.value["Message"]};
    this.Messages.push(this.messageItem);
    this.SendMessage.value["Message"] = '';

  }  
}
