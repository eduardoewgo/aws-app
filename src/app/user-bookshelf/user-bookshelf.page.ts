import { Component, OnInit } from '@angular/core';
import { BookService } from '../api/book.service';
import { UserService } from '../api/user.service';
import { BookshelfService } from '../api/bookshelf.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookshelf } from '../model/bookshelf';

@Component({
  selector: 'app-user-bookshelf',
  templateUrl: './user-bookshelf.page.html',
  styleUrls: ['./user-bookshelf.page.scss'],
})
export class UserBookshelfPage implements OnInit {

  userId: string;
  bookshelf: Bookshelf[];

  constructor(private route: ActivatedRoute, private router: Router,
              private bookService: BookService, private userService: UserService, private bookshelfService: BookshelfService) {

    this.userId = this.route.snapshot.paramMap.get('userId');
    this.bookshelfService.getByUserId(this.userId).subscribe((data: Bookshelf[]) => this.bookshelf = data);

  }

  ngOnInit() {
  }

}
