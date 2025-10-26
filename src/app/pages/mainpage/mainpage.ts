import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-mainpage',
  imports: [Card],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss',
})
export class Mainpage {}
