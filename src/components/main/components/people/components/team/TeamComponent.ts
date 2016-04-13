export class TeamComponent implements ng.IComponentOptions {
  public $routeConfig = [
    { path: '/status', component: 'employeeListComponent', name: 'Status', useAsDefault: true },
    { path: '/employeeType', component: 'employeeListComponent', name: 'EmployeeType' },
  ]

  public template: string = `
    <h1>Team</h1>
      <div class="btn-group" role="group" aria-label="...">
        <a class="btn btn-default" ng-link="['Status']">Status</a>
        <a class="btn btn-default" ng-link="['EmployeeType']">Employee Type</a>
      </div>
    <ng-outlet></ng-outlet>
  `
}