import {Component} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  employees;
  skills;

  constructor(private _employerrService: EmployeeService) {
    /* Fetch Employee data and Skills data to display employees in home page */
    this._employerrService.fetchEmployee()
      .subscribe(
        (empres) => {
          this.employees = empres;
          console.log(this.employees);
        },
        (error) => console.log('error : ' + error)
      );
    this._employerrService.fetchSkills().subscribe(
      (skillres) => {
        this.skills = skillres;
        console.log(this.skills);
      },
      (error) => console.log('error : ' + error)
    );
  }

}
