import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId); // need this to assure angular it will always get a value (no undefined)
  }

  onSelectUser(id: string) {
    console.log('selected user id', id);
    this.selectedUserId = id;
  }
}
