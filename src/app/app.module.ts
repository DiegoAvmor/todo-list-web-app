import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SignupViewComponent } from './views/signup-view/signup-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninViewComponent } from './views/signin-view/signin-view.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeViewComponent,
    SignupViewComponent,
    SigninViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
