import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Template } from 'src/app/code-genarate-template/code-genarate-template.component';

@Injectable({
  providedIn: 'root'
})
export class TemplateDataService {
  API_URL:string = "http://localhost:8081"

  constructor(private http:HttpClient) { }

  createTemplate(template: Template){ 
    return this.http.post(
              `${this.API_URL}/templates`
                , template);
  }
}
