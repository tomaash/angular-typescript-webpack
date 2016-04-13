import 'angular';
import {TeamComponent} from './TeamComponent';
import {EmployeeListComponent} from './components/employeeList/EmployeeListComponent';

angular.module('app.main.people.team', [])
    .component('teamComponent', new TeamComponent())
    .component('employeeListComponent', new EmployeeListComponent());
