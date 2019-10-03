import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookshelfService } from '../api/bookshelf.service';
import { UtilsService } from '../utils.service';


@Component({
  selector: 'app-user-reading',
  templateUrl: './user-reading.page.html',
  styleUrls: ['./user-reading.page.scss'],
})
export class UserReadingPage implements OnInit {

  userId: string;
  bookId: string;

  content: string;

  constructor(private route: ActivatedRoute, private bookshelfService: BookshelfService,
              private utilsService: UtilsService) {
    this.route.queryParams.subscribe(params => {
      this.userId = params.userId;
      this.bookId = params.bookId;
    });
  }

  ngOnInit() {
    this.generateContent();
  }

  nextPage() {
    this.generateContent();
    this.bookshelfService.addReadingSnapshot(this.userId, this.bookId).subscribe(r => console.log(r));
  }

  generateContent() {
    this.content = this.utilsService.lorem.generateParagraphs(3);
  }

}
