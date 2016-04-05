export class PeopleComponent implements ng.IComponentOptions {
  public $routeConfig = [
    { path: '/me', component: 'meComponent', name: 'Me', useAsDefault: true },
    { path: '/team', component: 'teamComponent', name: 'Team' }
  ]

  public template: string = `
    <h1>People</h1>
    <div>
      <ul>
        <li><a ng-link="['Me']">Me</a></li>
        <li><a ng-link="['Team']">Team</a></li>
      </ul>
    </div>
    <ng-outlet></ng-outlet>
  `
}