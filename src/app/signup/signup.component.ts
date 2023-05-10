
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
      firstName: new FormControl(null, [
        Validators.required,
      ]),
      lastName: new FormControl(null, [
        Validators.required,
      ]),
      email: new FormControl(null),
      password: new FormControl(null),
      phone: new FormControl(null, [
          Validators.required,    
          Validators.pattern(/^(02)?(01)[0-25][0-9]{8}$/)]),
          nationalId: new FormControl(null),  
          address: new FormControl(null),  
          gender: new FormControl(null),
          age: new FormControl(null),
          dob: new FormControl(null),
          username: new FormControl(null)
    
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
    onlogin(){
      this._Router.navigate(["/login"])
  
    }
  }
  


