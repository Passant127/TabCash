
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


    // this is group of from contain each control i made in Html
    // How to know that is my in html ? we use binding then now go to html
    constructor(private _AuthService :AuthService, private _Router:Router ) {}
    registerForm: FormGroup = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(5),
      ]),
      email: new FormControl(null),
      password: new FormControl(null),
      rePassword: new FormControl(null),
      phone: new FormControl(null, [
          Validators.required,    
          Validators.pattern(/^(02)?(01)[0-25][0-9]{8}$/)])
    });
    err:string =''
    onsubmit(formData: FormGroup) {
      this._AuthService.signup(formData.value).subscribe({
        next:(data)=>{
          console.log(data);
          if(data.message === 'sucessfull registration'){
            //to login
            this._Router.navigate(['/login'])
          }
        } ,
        error:(err)=> this.err = err.error.message
      
  
  
      }
      )
  
    }
  }
  


