import { Component, signal } from '@angular/core';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('nikestore');
}
