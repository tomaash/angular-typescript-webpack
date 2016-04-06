export class MeComponent implements ng.IComponentOptions {
  public $routeConfig = [
    { path: '/dashboard', component: 'dashboardComponent', name: 'Dashboard', useAsDefault: true },
    { path: '/profile/...', component: 'profileComponent', name: 'Profile' },
    { path: '/activities', component: 'activitiesComponent', name: 'Activities' }
  ]

  public template: string = `
      <h1>Me</h1>
      <div class="btn-group" role="group" aria-label="...">
        <a class="btn btn-default" ng-link="['Dashboard']">Dashboard</a>
        <a class="btn btn-default" ng-link="['Profile']">Profile</a>
        <a class="btn btn-default" ng-link="['Activities']">Activities</a>
      </div>
      <ng-outlet></ng-outlet>
    `
}