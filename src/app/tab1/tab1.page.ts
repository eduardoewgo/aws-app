import { Component } from '@angular/core';
import { UserService } from '../api/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router,
              public loadingController: LoadingController) {

    // Ideally, this should be a service - yes, I'm using the timer on purpose
    this.loadingController.create({
      message: 'Loading',
      duration: 500
    }).then(loading => loading.present());

    userService.getAll().subscribe((data: User[]) => {
      this.users = data;
    });
  }


}
