import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {IssueService } from '../../issue.service';
import { AuthService } from 'angularx-social-login';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup ;

  constructor(private issueService: IssueService , private router: Router, private fb: FormBuilder, private authService: AuthService) {
      this.createForm = this.fb.group({
        title: ['', Validators.required],
        summary: '',
        site_of_issue: '',
        department: '',
        status: 'Open'
        });
      //console.log('this.createForm----------', this.createForm);
    }
  addIssues(createForm) {
    this.issueService.addIssue(this.createForm).subscribe(() => {
     // console.log('createForm is printing----------------', createForm);
      this.router.navigate([`/list`]);

     });

  }


  signOut(): void {
    console.log('signout os called');
    this.authService.signOut();
    this.router.navigateByUrl('/login');


  }



  ngOnInit() {
  }

}
