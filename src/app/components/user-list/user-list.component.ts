import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: any[] = [];
  newUser: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  sortByName(): void {
    this.users = [...this.users].sort((a: any, b: any) => {
      return a.name.localeCompare(b.name);
    });
  }

  addUser(): void {
    if (this.newUser.name && this.newUser.email) {
      this.users.push({ ...this.newUser });
      this.users = [...this.users];
      this.newUser = {}; // Clear the input fields after adding the user
    }
  }
}
