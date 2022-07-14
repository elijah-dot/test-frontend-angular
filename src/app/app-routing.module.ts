import { PomodoroAppComponent } from './pomodoro-app/pomodoro-app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'register', component : RegisterComponent},
  { path: 'login', component : LoginComponent},
  { path: 'timer', component : PomodoroAppComponent},
  { path: 'profile', component : ProfileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
