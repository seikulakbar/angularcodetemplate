import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeGenarateTemplateComponent } from './code-genarate-template/code-genarate-template.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'templates', component: CodeGenarateTemplateComponent },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
