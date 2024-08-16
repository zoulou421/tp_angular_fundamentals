import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
     {path:'',component:AppComponent},
    //{path: '', redirectTo: '/index', pathMatch: 'full'},
    {path:'login',component:LoginComponent},
   // {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path:'register',component:RegisterComponent},

 
];
