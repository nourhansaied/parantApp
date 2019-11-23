import { Component, OnInit } from '@angular/core';
import { MangeUsersService } from './services/mange-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public usersList: any[] = [];
  private offset = 1;
  public selectedUserID: number = null;
  constructor(
    private _MangeUsersService : MangeUsersService
  ) { }

  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this._MangeUsersService.getUsers(this.offset).subscribe(response => {
      let users = response['data'];
      this.usersList = this.usersList.concat(users);
    });
  }

  onScroll() {
    this.offset++;
    this.getUsers();
  }

  showUserDetails(userID) {
    this.clearSelection();
    this.selectedUserID = userID;
  }

  clearSelection() {
    this.selectedUserID = null;
  }
}
