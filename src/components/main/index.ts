import 'angular';
import {MainComponent} from './MainComponent';

import './components/people';
import './components/absence';
import './components/goal';
import './components/security';

angular.module('app.main', [
  'app.main.people',
  'app.main.absence',
  'app.main.goal',
  'app.main.security',
])
  .value('$routerRootComponent', 'mainComponent')
  .component('mainComponent', new MainComponent())
