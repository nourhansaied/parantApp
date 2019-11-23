import { Injectable } from '@angular/core';
import { QueryService } from '../../../../shared/services/query.service';
import { Observable, BehaviorSubject } from '../../../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUser: BehaviorSubject<any> = new BehaviorSubject(true);
  constructor(
    private queryService: QueryService
  ) { }
  authanticateUser(loginObj: object): Observable<any> {
    const endPoint = `api/login`;
    this.queryService.setUrl(endPoint);
    this.queryService.setParamsObj(loginObj);
    return this.queryService.post('object');
  }

  setUserToken() {
    this.queryService.setHeader();
  }
  setLoginState(state){
    this.loginUser.next(state);
  }
  getLoginState() {
    return this.loginUser.asObservable();
  }
}
