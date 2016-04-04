import 'angular';
import {MainComponent} from './components/main/MainComponent';
// import {FooComponent} from './components/foo/FooComponent';
import './components/foo/index';
import {BarComponent} from './components/bar/BarComponent';
import './components/bar/BarComponent';

angular.module('app.main', ['app.main.foo'])
    .value('$routerRootComponent', 'mainComponent')
    .component('mainComponent', new MainComponent())
    // .component('fooComponent', new FooComponent())
    .component('barComponent',  new BarComponent());
