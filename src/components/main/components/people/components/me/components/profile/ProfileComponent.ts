export class ProfileComponent implements ng.IComponentOptions {
  public $routeConfig = [
    { path: '/overview', component: 'overviewComponent', name: 'Overview', useAsDefault: true },
    { path: '/profile/...', component: 'profilePageComponent', name: 'ProfilePage' },
    { path: '/documents', component: 'documentsComponent', name: 'Documents' }
  ]

  public template: string = `
      <h1>Profile</h1>
      <div class="btn-group" role="group" aria-label="...">
        <a class="btn btn-default" ng-link="['Overview']">Overview</a>
        <a class="btn btn-default" ng-link="['ProfilePage']">Profile</a>
        <a class="btn btn-default" ng-link="['Documents']">Documents</a>
      </div>
      <ng-outlet></ng-outlet>
    `
}