import { Component } from '@angular/core';
import { Productlist } from './productlist/productlist';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-mainpage',
  imports: [Productlist, Header],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss',
})
export class Mainpage {}
