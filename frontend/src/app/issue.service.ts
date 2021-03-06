import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class IssueService {

  url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

getIssue() {
return this.http.get(`${this.url}/issues`);
}

getIssueById(id) {
return  this.http.get(`${this.url}/issues/${id}`);
}


addIssue(title, summary,site_of_issue,department,severity) {
const issue = {
title : title,
summary: summary,
site_of_issue: site_of_issue,
department: department,
severity: severity

};
//console.log('issue----------',issue);

return this.http.post(`${this.url}/issues/add`, issue);

}

updateIssue(id,title, summary,site_of_issue,department,severity){
const issue = {
  title : title,
  summary: summary,
  site_of_issue: site_of_issue,
  department: department,
  severity: severity
  
};
  return this.http.post(`${this.url}/issues/update/${id}`, issue);
}

deleteIssue(id) {
  return this.http.get(`${this.url}/issues/delete/${id}`);

}

}
