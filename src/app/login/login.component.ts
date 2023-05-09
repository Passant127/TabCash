import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    // this is group of from contain each control i made in Html
  // How to know that is my in html ? we use binding then now go to html
  constructor(private _AuthService :AuthService, private _Router:Router ) {}
  loginForm: FormGroup = new FormGroup({
  
    email: new FormControl(null),
    password: new FormControl(null),
   
  });
  errormsg:string =''
  submitlogin(formData: FormGroup) {
   
    this._AuthService.login(formData.value).subscribe({
      next:(data)=>{
        console.log(data.data.access_token);
        if(data.message === 'sucessfull login'){
            // make localStorage for taken (email and password)
            localStorage.setItem("userTaken",data.data.access_token)
            this._AuthService.saveCurrentUser();

            this._Router.navigate(["/home"]);
        }
      } ,
      error:(err)=> this.errormsg = err.error.message


    }
    )

  }
  onsignup(){
    this._Router.navigate(["/signup"])

  }

}
