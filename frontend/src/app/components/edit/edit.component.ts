import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material';
import {IssueService} from '../../issue.service';
import {Issue} from '../../issue.model';
import { from } from 'rxjs';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: string;
  issue: any = {};
  updateForm: FormGroup;


constructor(private issueService: IssueService , private router: Router , private route: ActivatedRoute , private snackbar:MatSnackBar , private fb: FormBuilder) {

      this.createForm();
  }


  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      summary : '',
      site_of_issue : '',
      department : '',
      severity: '',
      status: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res =>{
        this.issue = res;
        this.updateForm.get('title').setValue(this.issue.title);
        this.updateForm.get('summary').setValue(this.issue.summary);
        this.updateForm.get('site_of_issue').setValue(this.issue.site_of_issue);
        this.updateForm.get('department').setValue(this.issue.department);
        this.updateForm.get('severity').setValue(this.issue.severity);
        this.updateForm.get('status').setValue(this.issue.status);
      });

    });
  }



  updateIssue( title, summary , site_of_issue, department ,  severity,status) {
  this.issueService.updateIssue(this.id, summary,site_of_issue,title, department, severity).subscribe(() => {
      this.snackbar.open('Issue Updated Successfully', 'Ok', {
        duration: 3000
      });

    })

  }

}
