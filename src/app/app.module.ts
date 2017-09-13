import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {HomeComponent} from './home/home.component';
import {EmployeeService} from './employee.service';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {DeleteEmployeeComponent} from './delete-employee/delete-employee.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddEmployeeComponent},
  {path: 'edit/:id', component: EditEmployeeComponent},
  {path: 'delete/:id', component: DeleteEmployeeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    HomeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
