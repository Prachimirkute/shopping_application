import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  constructor(private socket: Socket) { }

  sendMessage(message: string): void {
    this.socket.emit('chat-message', message);
  }

  receiveMessages(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('chat-message', (message: string) => {
        observer.next(message);
      });
    });
  }
}
