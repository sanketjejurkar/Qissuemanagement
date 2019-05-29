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
        employee_code: '',
        title: ['', Validators.required],
        summary: '',
        site_of_issue: '',
        department: '',
        responsible: '',
        description: '',
        severity: ''

      });
    }
  addIssues(value) {
    console.log(value);
    // this.issueService.addIssue(title, employee_code,summary,site_of_issue,responsible,department ,severity, description).subscribe(() => {
    //   this.router.navigate([`/list`]);
    // });
  }

  ngOnInit() {
  }

}
