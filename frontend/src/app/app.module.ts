import { AuthService } from 'angularx-social-login';
//import { LogService } from './../../../../GSignIn-master/src/app/log.service';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule} from '@angular/forms';
import { SocialLoginModule } from 'angularx-social-login';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createComponent } from '@angular/compiler/src/core';
import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';


import { IssueService } from './issue.service';
import { LogService } from './log.service';


import { from } from 'rxjs';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path : 'create', component : CreateComponent },
  { path : 'list', component : ListComponent },
  { path : 'edit/:id', component : EditComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}

];


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
  }
]);


export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,




  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    IssueService, LogService
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
