import { Component, signal } from '@angular/core';
import { Mainpage } from './pages/mainpage/mainpage';

@Component({
  selector: 'app-root',
  imports: [Mainpage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('nikestore');
}
