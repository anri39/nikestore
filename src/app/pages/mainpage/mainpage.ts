import { Component } from '@angular/core';
import { Productlist } from './productlist/productlist';

@Component({
  selector: 'app-mainpage',
  imports: [Productlist],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss',
})
export class Mainpage {}
