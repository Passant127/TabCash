import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent,title:'home'},
  {path:'login',component:LoginComponent,title:'Login Screen'},
  {path:'signup',component:SignupComponent,title:'Sign Up Screen'},
  {path:'', redirectTo:'home',pathMatch:'full'},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
