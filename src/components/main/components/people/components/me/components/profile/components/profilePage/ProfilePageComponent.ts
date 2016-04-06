export class ProfilePageComponent implements ng.IComponentOptions {
  public $routeConfig = [
    { path: '/identity', component: 'identityComponent', name: 'Identity', useAsDefault: true },
    { path: '/additional-contacts', component: 'additionalContactsComponent', name: 'AdditionalContacts' },
  ]

  public template: string = `
      <h1>Profile</h1>
      <div class="btn-group" role="group" aria-label="...">
        <a class="btn btn-default" ng-link="['ProfilePage']">Identity</a>
        <a class="btn btn-default" ng-link="['AdditionalContacts']">Additional Contacts</a>
      </div>
      <ng-outlet></ng-outlet>
    `
}