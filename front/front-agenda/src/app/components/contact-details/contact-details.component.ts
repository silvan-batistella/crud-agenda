import { Contact } from './../../models/contact.model';
import { AgendaService } from './../../services/agenda.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = {
    id: 0,
    idade: 0,
    nome: '',
    email: ''
  };
  message = '';

  constructor(
    private agendaService: AgendaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getContact(this.route.snapshot.params.id);
  }

  getContact(id: number): void {
    this.agendaService.get(id)
      .subscribe(
        data => {
          this.contact = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(): void {
    const data = {
      nome: this.contact.nome,
      idade: this.contact.idade,
      email: this.contact.email
    };

    this.agendaService.update(this.contact.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
          this.router.navigate(['/contatos/']);
        },
        error => {
          console.log(error);
        });
  }
  deleteTutorial(): void {
    this.agendaService.delete(this.contact.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/contatos/']);
        },
        error => {
          console.log(error);
        });
  }

}
