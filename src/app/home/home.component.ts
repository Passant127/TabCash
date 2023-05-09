import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  imgsrc: string = '../assets/logo.png';
  width: number = 100;
  walletimg: string = '../assets/Wallet.png';
  results = [
    {src:  '../assets/Frame.png' , title: 'Convenience', details:'Easy to use and ready to pay anywhere, anytime'},
    {src: '../assets/life style.png', title: 'For all lifestyle', details: 'Variety of services to fulfill your lifestyle.' },
    {src: '../assets/Group.png', title: 'Secure', details:   'Pay with full confidence using secure and protected transactions.'},
    {src:  '../assets/mockup.png', title:  'Inclusive', details:    'Usable for all mobile operators.'},  
  ];
 
 


  isLogin: boolean = false;
  constructor(private _AuthService: AuthService, private _router: Router) {}
  ngOnInit(): void {
    this._AuthService.currentuser.subscribe({
      next: (response) => {
        if (this._AuthService.currentuser.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  gologin() {
    this._router.navigate(['/login']);
  }
  onsignup(){
    this._router.navigate(["/signup"])

  }
}
