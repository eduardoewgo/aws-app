import { Component } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../api/book.service';
import { ModalController } from '@ionic/angular';
import { FormComponent } from '../components/form/form.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  books: Book[] = [];

  constructor(private bookService: BookService, private modalController: ModalController) {
    bookService.getAll().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  async bookModal() {
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        title: 'Adding new Book',
        object: new Book(),
        submit: (book: Book) => this.bookService.add(book).subscribe((data: Book) => this.books.push(data)),
        callback: () => modal.dismiss()
      }
    });
    return await modal.present();
  }

}
