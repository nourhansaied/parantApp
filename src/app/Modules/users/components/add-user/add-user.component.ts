import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Subject } from '../../../../../../node_modules/rxjs';
import { NgbModalRef } from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @ViewChild('modalElem',{static: false}) modalElem;
  @Input() isopened: Subject<boolean>;
  @Input() edittedUserData?: any;
  private modalRef: NgbModalRef;
  public user: { name: string, job: string } = { name: null, job: null };
  constructor() { }

  ngOnInit() {
  }

}
