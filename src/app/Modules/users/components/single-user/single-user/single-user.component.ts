import { Component, OnInit, Input, EventEmitter, Output, SimpleChange } from '@angular/core';
import { Subject, BehaviorSubject } from '../../../../../../../node_modules/rxjs';
import { MangeUsersService } from '../../../services/mange-users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  @Input() userID: number;
  @Output() userClosed: EventEmitter<string> = new EventEmitter();
  private isOpenedEditModal: Subject<boolean> = new BehaviorSubject(false);
  private isOpenedDeleteModal: Subject<boolean> = new BehaviorSubject(false);
  public userData: object;
  constructor(
    private manageUsers: MangeUsersService
  ) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChange) {
    if ('userID' in changes) {
      this.manageUsers.getSingleuser(this.userID).subscribe(respose => {
        this.userData = respose['data'];
      });
    }
  }

  editUser() {
    this.isOpenedEditModal.next(true);
  }

  deleteUser() {
    this.isOpenedDeleteModal.next(true);
  }

  close() {
    this.userClosed.emit('');
  }
}
