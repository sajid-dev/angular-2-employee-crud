import {Component} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {
  skills;

  constructor(private _employerrService: EmployeeService) {
    /* Fetch Skills to add in the form */
    this._employerrService.fetchSkills()
      .subscribe(
        (res) => {
          this.skills = res;
          console.log(this.skills);
        },
        (error) => console.log('error : ' + error)
      );
  }
}
