import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Contact } from './../../models/contact.model';
import { Component, OnInit, Inject } from '@angular/core';
import { AgendaService } from './../../services/agenda.service';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  currentIndex : number;
  contacts ?: Contact[];
  currentContact ?: Contact;


  constructor(
    private agendaService: AgendaService,
    private router: Router,
     private http: HttpClient,
      @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() : void {
    this.agendaService.getAll().subscribe(
      data => {
        this.contacts = data;
        console.log(`Lista de contatos recuperada = (${data})`);
      }, error => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.getAll();
    this.currentContact = undefined;
    this.currentIndex = -1;
  }

  setActiveContact(contact: Contact, index: number): void {
    this.currentContact = contact;
    this.currentIndex = index;
  }

  public deleteContato( contact: Contact, ): void {
    this.http.delete(`http://localhost:8080/contatos/${contact.id}`)
    .subscribe(
      response => {
        console.log(response);
        this.reloadCurrentRoute();
      },
      error => {
        console.log(error);
      });
    }

  public detailContact(id: number): void {
    this.router.navigate([`/contatos/${id}`]);
  }

  public reloadCurrentRoute(): void {
    this._document.defaultView.location.reload();
  }
}
