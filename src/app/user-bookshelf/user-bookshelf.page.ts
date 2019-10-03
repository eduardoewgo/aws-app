import { Component, OnInit } from '@angular/core';
import { BookService } from '../api/book.service';
import { UserService } from '../api/user.service';
import { BookshelfService } from '../api/bookshelf.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Bookshelf } from '../model/bookshelf';
import { Book } from '../model/book';

@Component({
  selector: 'app-user-bookshelf',
  templateUrl: './user-bookshelf.page.html',
  styleUrls: ['./user-bookshelf.page.scss'],
})
export class UserBookshelfPage implements OnInit {

  userId: string;
  books: Book[] = [];
  bookshelf: Bookshelf[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
              private bookService: BookService, private userService: UserService, private bookshelfService: BookshelfService) {

    this.userId = this.route.snapshot.paramMap.get('userId');
    this.bookshelfService.getByUserId(this.userId).subscribe((data: Bookshelf[]) => this.bookshelf = data);
    this.bookService.getAll().subscribe((data: Book[]) => this.books = data);

  }

  ngOnInit() {
  }

  goToReading(userId: string, bookId: string) {
    // Pretty sure there's a better way, but time is short :/
    const navigationExtras: NavigationExtras = {
      queryParams: { userId, bookId }
    };
    this.router.navigate(['/tabs/tab1/user-reading'], navigationExtras);
  }

  addReading(userId: string, bookId: string) {
    this.bookshelfService.addUserBook(userId, bookId).subscribe();
  }

}
