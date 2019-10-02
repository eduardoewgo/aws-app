import { Component } from '@angular/core';
import { UserService } from '../api/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: User[] = [];

  constructor(userService: UserService) {
    this.users = userService.getAll();
  }

  books(user: User) {
    console.log(user);
  }

  addBook(user: User) {    
  }

}
