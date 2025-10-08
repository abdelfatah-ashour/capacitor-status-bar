import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonButtons,
  IonBackButton,
  IonInput,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { send, personCircle } from 'ionicons/icons';
import { Keyboard, KeyboardResize } from '@capacitor/keyboard';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other';
  timestamp: Date;
  avatar?: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonButtons,
    IonBackButton,
    IonInput,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
  ],
})
export class ChatPage {
  message = signal('');
  messages = signal<Message[]>([
    {
      id: 1,
      text: 'Hey! How are you?',
      sender: 'other',
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: 2,
      text: 'I\'m good! Thanks for asking!',
      sender: 'me',
      timestamp: new Date(Date.now() - 3500000),
    },
    {
      id: 3,
      text: 'Great! Want to test the keyboard behavior with the status bar overlay?',
      sender: 'other',
      timestamp: new Date(Date.now() - 3000000),
    },
    {
      id: 4,
      text: 'Sure! Let me type something...',
      sender: 'me',
      timestamp: new Date(Date.now() - 2500000),
    },
  ]);

  constructor(private router: Router) {
    addIcons({ send, personCircle });
    Keyboard.setResizeMode({mode : KeyboardResize.Native});
    Keyboard.addListener('keyboardDidShow', () => {
      console.log('Keyboard did show');
    });
    Keyboard.addListener('keyboardDidHide', () => {
      console.log('Keyboard did hide');
    });
  }

  sendMessage() {
    const messageText = this.message().trim();
    if (messageText) {
      const newMessage: Message = {
        id: this.messages().length + 1,
        text: messageText,
        sender: 'me',
        timestamp: new Date(),
      };
      this.messages.update((msgs) => [...msgs, newMessage]);
      this.message.set('');

      // Simulate a response after 1 second
      setTimeout(() => {
        const response: Message = {
          id: this.messages().length + 1,
          text: 'That\'s a nice message! The keyboard is working perfectly with the status bar overlay.',
          sender: 'other',
          timestamp: new Date(),
        };
        this.messages.update((msgs) => [...msgs, response]);
      }, 1000);
    }
  }

  onInputKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
}

