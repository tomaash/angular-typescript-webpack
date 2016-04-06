export class PeopleComponent implements ng.IComponentOptions {
  public $routeConfig = [
    { path: '/me', component: 'meComponent', name: 'Me', useAsDefault: true },
    { path: '/team', component: 'teamComponent', name: 'Team' }
  ]

  public template: string = `
    <h1>People</h1>
    <div class="btn-group" role="group" aria-label="...">
      <a class="btn btn-default" ng-link="['Me']">Me</a>
      <a class="btn btn-default" ng-link="['Team']">Team</a>
    </div>
    <ng-outlet></ng-outlet>
  `
}