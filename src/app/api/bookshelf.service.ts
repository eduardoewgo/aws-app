import { Injectable } from '@angular/core';
import { Bookshelf } from '../model/bookshelf';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class BookshelfService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Bookshelf[]> {
    return this.http.get<Bookshelf[]>(`${environment.apiUrl}/bookshelf`);
  }

  getByUserId(userId: string): Observable<Bookshelf[]> {
    return this.http.get<Bookshelf[]>(`${environment.apiUrl}/bookshelf/user/${userId}`);
  }

  addUserBook(userId: string, bookId: string) {
    return this.http.post(`${environment.apiUrl}/bookshelf`, { userId, bookId });
  }

  addReadingSnapshot(userId: string, bookId: string) {
    return this.http.post(`${environment.apiUrl}/bookshelf/reading-snapshot`, { userId, bookId });
  }
}
