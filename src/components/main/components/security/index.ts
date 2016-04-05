import 'angular';
import {SecurityComponent} from './SecurityComponent';

angular.module('app.main.security', [])
  .component('securityComponent', new SecurityComponent())
