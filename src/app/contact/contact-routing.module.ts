import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [{
  path: 'contact',
  component: ContactComponent,
  children: [{
    path: 'email',
    component: EmailComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContactRoutingModule { }
