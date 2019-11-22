import { Injectable } from '@angular/core';
import { QueryService } from '../../../../shared/services/query.service';
import { Observable } from '../../../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
}
