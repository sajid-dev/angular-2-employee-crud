import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
  private employeeId: string;

  constructor(private http: Http) {
  }

  /* Fetch Employee Data from employee.json */
  fetchEmployee = (): Observable<Response> => {
    console.log('Get all employees');
    return this.http.get('/assets/data/employees.json').map(res => res.json());
  }
  /* Fetch Employee Data from skills.json */
  fetchSkills = (): Observable<Response> => {
    console.log('Get all employees');
    return this.http.get('/assets/data/skills.json').map(res => res.json());
  }

}
