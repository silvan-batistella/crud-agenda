import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'contatos', pathMatch: 'full'},
  {path: 'contatos/add', component: AddContactComponent},
  {path: 'contatos', component: ContactsListComponent},
  {path: 'contatos/:id', component: ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
