import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateDataService } from '../service/data/template-data.service';
import { GithubService } from '../service/github.service';
import { RepoArray } from '../user';

export class Template {
  constructor(
    public id: number,
    public projectUrl: string,
    public groupId: string,
    public artifactId: string,
    public pkg: string,
    public version: string
  ) {

  }
}

@Component({
  selector: 'app-code-genarate-template',
  templateUrl: './code-genarate-template.component.html',
  styleUrls: ['./code-genarate-template.component.css']
})

export class CodeGenarateTemplateComponent implements OnInit {
  template: Template=new Template(1, '', '', '', '', '');

  constructor(private githubService: GithubService,
    private templateService: TemplateDataService,
    private router: Router) { }

  //template: Template = new Template(1, '', '', '', '', '', '', false, new Date());

  repoArrays: RepoArray[] = [];
  userName: string = 'seikulakbar';

  projects = ['do-orders', 'do-sms', 'tmo-base', 'tmo-code-template'];
  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.githubService.getRepos(this.userName).subscribe(data => {
      this.repoArrays = data;
    });
  }

  saveTemplate() {    
    this.templateService.createTemplate(this.template)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome'])
        }
      )
  }
}
