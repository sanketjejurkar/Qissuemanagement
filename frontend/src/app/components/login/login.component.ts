import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { NgForm } from "@angular/forms";
import { LogService } from '../../log.service' ;
import { routerNgProbeToken } from '@angular/router/src/router_module';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService , private logService: LogService) { }
  user: SocialUser;
  serverErrorMessages: string;

  ngOnInit() {
    console.log('ng on it is called' );
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.logService.login(user.idToken).subscribe(data => {
        console.log('inside navigate');
        this.router.navigateByUrl('/list');

            });

    });


  }


  signInWithGoogle(): void {
    console.log('sign in is getting called');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }

  signOut(): void {
    console.log('signout os called');
    this.authService.signOut();

  }





}
