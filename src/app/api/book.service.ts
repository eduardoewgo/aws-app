import { Injectable } from '@angular/core';
import { Book } from '../model/book';

import { BOOKS } from '../model/book-mock';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAll(): Book[] {
    return BOOKS;
  }

  getById(id: number): Book {
    return BOOKS.find(el => el.id === id);
  }
}
