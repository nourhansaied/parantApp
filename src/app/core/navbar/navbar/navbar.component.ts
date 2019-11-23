import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/login/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loginUser: boolean = false;
  constructor(
    private _AuthService : AuthService
  ) {
    this._AuthService.getLoginState().subscribe(state => this.loginUser = state )
  }
  ngOnInit() {
  }

}
