import { SigninViewComponent } from './views/signin-view/signin-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { SignupViewComponent } from './views/signup-view/signup-view.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeViewComponent },
  { path: "register", component: SignupViewComponent},
  { path: "login", component: SigninViewComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
