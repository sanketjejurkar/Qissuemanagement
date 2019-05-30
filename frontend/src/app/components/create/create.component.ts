import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {IssueService } from '../../issue.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup ;

  constructor(private issueService: IssueService , private router: Router, private fb: FormBuilder) {
      this.createForm = this.fb.group({
        title: ['', Validators.required],
        summary: '',
        site_of_issue: '',
        department: '',
        severity: ''

      });
      //console.log('this.createForm----------', this.createForm);
    }
  addIssues(title,summary,site_of_issue,department,severity) {
   
    this.issueService.addIssue(title,summary,site_of_issue,department,severity).subscribe(() => {
      this.router.navigate([`/list`]);

     });
    
  }

  ngOnInit() {
  }

}
