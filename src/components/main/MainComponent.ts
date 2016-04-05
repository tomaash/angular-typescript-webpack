export class MainComponent implements ng.IComponentOptions {
  public $routeConfig = [
    { path: '/people/...', component: 'peopleComponent', name: 'People', useAsDefault: true },
    { path: '/absence', component: 'absenceComponent', name: 'Absence' },
    { path: '/goal', component: 'goalComponent', name: 'Goal' },
    { path: '/security', component: 'securityComponent', name: 'Security' }
  ]
  public template: string = `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li><a ng-link="['People']">People</a></li>
          <li><a ng-link="['Absence']">Absence</a></li>
          <li><a ng-link="['Goal']">Goal</a></li>
          <li><a ng-link="['Security']">Security</a></li>
        </ul>
      </div>
    </nav>
    <ng-outlet></ng-outlet>
  `;
}