import { Component } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../api/book.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  books: Book[] = [];

  constructor(bookService: BookService) {
    this.books = bookService.getAll();
  }

}
