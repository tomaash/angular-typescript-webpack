export class FooComponent implements ng.IComponentOptions{
    public $routeConfig = [
      		{ path: '/foo1', component: 'foo1Component', name: 'Foo1', useAsDefault: true },
          { path: '/foo2', component: 'foo2Component', name: 'Foo2' }
    ]

    public template: string = `
      <h1>FOO</h1>
      <div>
        <ul>
          <li><a ng-link="['Foo1']">FOO1</a></li>
          <li><a ng-link="['Foo2']">FOO2</a></li>
        </ul>
      </div>
      <ng-outlet></ng-outlet>
    `
}