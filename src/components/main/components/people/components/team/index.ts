import 'angular';
import {TeamComponent} from './TeamComponent';
import {TeamDashboardComponent} from './components/TeamDashboardComponent';
import {EmployeesComponent} from './components/EmployeesComponent';
import {EmployeeListComponent} from './components/employeeList/EmployeeListComponent';
import {FooComponent} from './components/FooComponent';

angular.module('app.main.people.team', [])
    .component('teamComponent', new TeamComponent())
    .component('teamPeopleComponent', new EmployeesComponent())
    .component('teamDashboardComponent', new TeamDashboardComponent())
    .component('employeeListComponent', new EmployeeListComponent())
    .component('employeesComponent', new EmployeesComponent())
    .component('fooComponent', new FooComponent());
