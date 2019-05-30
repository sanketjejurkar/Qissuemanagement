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
  displayColoum = ['title', 'summary', 'site_of_issue'  ,  'status', 'department', 'severity' , 'actions' ];

  constructor(private issueService: IssueService, private router: Router ) { }

  ngOnInit() {
    console.log('ng onit called--------');
    this.fetchIssues();
  }

  fetchIssues() {
    console.log('called from ngonit');
    this.issueService.getIssue()
    .subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data Requested--------');

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
