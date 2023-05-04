import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imgsrc:string = "../assets/logo.png";
  width:number = 100;
  walletimg:string = "../assets/Wallet.png"

}
