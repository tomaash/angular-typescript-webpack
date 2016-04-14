export class EmployeesComponent implements ng.IComponentOptions {
  public $routeConfig = [
    { path: '/all', component: 'employeeListComponent', name: 'All', useAsDefault: true},
    { path: '/:group/:filter', component: 'employeeListComponent', name: 'Group'}
  ]

  public template: string = `
    <h1>Employees</h1>
      <div class="btn-group" role="group" aria-label="...">
        <a class="btn btn-default" ng-link="['All']">All</a>
        <a class="btn btn-default" ng-link="['Group', {group: 'status', filter: 'active'}]">Status</a>
        <a class="btn btn-default" ng-link="['Group', {group: 'employeeType', filter: 'employee'}]">Employee Type</a>
      </div>
    <ng-outlet></ng-outlet>
  `
}
