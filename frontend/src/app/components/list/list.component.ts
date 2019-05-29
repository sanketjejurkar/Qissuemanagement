import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { MatTableDataSource } from '@angular/material';
import { Issue } from '../../issue.model';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayColoum = ['employee_code','title','severity' , 'site_of_issue' ,'summary',  'status', 'department','actions' ];

  constructor(private issueService: IssueService, private router: Router ) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService.getIssue()
    .subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data Requested--------');
      console.log(this.issues[ 'severity' ]);
    });
  }

  editIssues(id) {
    this.router.navigate([`/edit/${id}`]);

  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

}
