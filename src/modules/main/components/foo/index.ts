import 'angular';
import {FooComponent} from './FooComponent';
import {Foo1Component} from './components/foo1/Foo1Component';
import {Foo2Component} from './components/foo2/Foo2Component';

angular.module('app.main.foo', [])
    .value('$routerRootComponent', 'fooComponent')
    .component('fooComponent', new FooComponent())
    .component('foo1Component', new Foo1Component())
    .component('foo2Component', new Foo2Component());
