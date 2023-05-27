import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {
  username = '';
  message = '';

  constructor(private socket: Socket) {}

  sendMessage(): void {
    const message = {
      username: this.username,
      text: this.message
    };
    this.socket.emit('chat-message', message);
    this.message = '';
  }
}
  // username= 'username';
  // message = '';
  // chatHistory: ChatMessage[] = [];

  // constructor(private socket: Socket) {
  //   this.socket.on('message', (message: ChatMessage) => {
  //     this.chatHistory.push(message);
  //   });
  // }

  // sendMessage():void {
  //   const message: ChatMessage = {
  //     username: this.username,
  //     text:this.message
  //   };
  //   this.socket.emit('message', message);
  //   this.message = '';
  // }

