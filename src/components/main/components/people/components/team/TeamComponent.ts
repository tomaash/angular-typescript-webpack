export class TeamComponent implements ng.IComponentOptions {
  public $routeConfig = [
    { path: '/dashboard', component: 'teamDashboardComponent', name: 'Dashboard', useAsDefault: true},
    { path: '/employees/...', component: 'employeesComponent', name: 'Employees'}
  ]

  public template: string = `
    <h1>Team</h1>
      <div class="btn-group" role="group" aria-label="...">
        <a class="btn btn-default" ng-link="['Dashboard']">Dashboard</a>
        <a class="btn btn-default" ng-link="['Employees']">Employees</a>
      </div>
    <ng-outlet></ng-outlet>
  `
}
