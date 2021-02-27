import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Contact } from './../../models/contact.model';
import { AgendaService } from './../../services/agenda.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact : Contact = {
    nome: '',
    email: '',
    idade: 0
  };

  submited = false;

  constructor(
    private agendaService: AgendaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveContact(): void {
    const data = {
      nome: this.contact.nome,
      email: this.contact.email,
      idade: this.contact.idade
    }
    this.agendaService.create(data).subscribe(
      response => {
        console.log("Contato criado: (" + Date.now() +") = " + data);
        this.router.navigate(['/contatos/']);
      } , error => {
        console.error("Problemas ao tentar criar o registro (" + data + ")!");
      }
    )
  }

  newContact() : void {
    this.submited = false,
    this.contact = {
      nome: '',
      email: '',
      idade: 0
    }
  }
}
