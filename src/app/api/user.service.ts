import { Injectable } from '@angular/core';
import { User } from '../model/user';

// Mocked data
import { USERS } from '../model/user-mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAll(): User[] {
    return USERS;
  }

  getById(id: number): User {
    return USERS.find(el => el.id === id);
  }
}
