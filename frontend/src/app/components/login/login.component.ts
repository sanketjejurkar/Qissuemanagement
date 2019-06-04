

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { NgForm } from "@angular/forms";
import { LogService } from '../../log.service' ;
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { MatSnackBar} from '@angular/material';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  serverErrorMessages: string;


  constructor(private router: Router, private authService: AuthService , private logService: LogService , private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
    //  res=>{
    this.user = user;
      console.log('user is printing------------',user.email);
      console.log('user tocken is printing------------',user.idToken);
      //this.logService.setToken(res['token']);
    if (user.email.endsWith('@quantiphi.com')){
      this.logService.login(user.idToken).subscribe(data => {


      },

      err=> {
        console.log(err)
      });
      this.router.navigateByUrl('/list');


  } else {

      this.snackbar.open('Only Quantiphi Employee can Access This', 'Ok', {
        duration: 3000
      });

      this.router.navigateByUrl('/login');
  }

  //  }
    /*err=>{
      this.serverErrorMessages = err.error.message; }*/
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)


  }









}
