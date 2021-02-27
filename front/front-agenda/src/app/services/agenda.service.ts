import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contact } from './../models/contact.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/contatos';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor( private http: HttpClient ) { }

  getAll() : Observable<Contact[]> {
    return this.http.get<Contact[]>(baseUrl);
  }

  get (id: any) : Observable<Contact> {
    return this.http.get<Contact>('${baseUrl}/${id}' )
  }

  create(data: any) : Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update (id: any, data: any) : Observable<any> {
    return this.http.put('${baseUrl}/${id}', data);
  }

  delete (id: any) : Observable<any> {
    return this.http.delete(baseUrl);
  }

}
