import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUrl}/book`);
  }

  getById(id: string): Observable<Book> {
    return this.http.get<Book>(`${environment.apiUrl}/book/${id}`);
  }
}
