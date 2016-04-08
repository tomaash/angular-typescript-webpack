export class MainComponent implements ng.IComponentOptions {

  public template: string = require('./MainComponent.html');

  public $routeConfig = [
    { path: '/people/...', component: 'peopleComponent', name: 'People', useAsDefault: true },
    { path: '/absence', component: 'absenceComponent', name: 'Absence' },
    { path: '/goal', component: 'goalComponent', name: 'Goal' },
    { path: '/security', component: 'securityComponent', name: 'Security' }
  ]

}