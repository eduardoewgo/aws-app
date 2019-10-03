import { Component } from '@angular/core';
import { UserService } from '../api/user.service';
import { User } from '../model/user';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    userService.getAll().subscribe((data: User[]) => {
      this.users = data;
    });
  }

}
