export class MainComponent implements ng.IComponentOptions{
    public $routeConfig = [
      		{ path: '/foo/...', component: 'fooComponent', name: 'Foo', useAsDefault: true },
          { path: '/bar', component: 'barComponent', name: 'Bar' }
    ]
    public template: string = `
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li><a ng-link="['Foo']">FOO</a></li>
              <li><a ng-link="['Bar']">BAR</a></li>
            </ul>
          </div>
        </nav>
        <ng-outlet></ng-outlet>`;
}