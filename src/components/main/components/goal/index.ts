import 'angular';
import {GoalComponent} from './GoalComponent';

angular.module('app.main.goal', [])
  .component('goalComponent', new GoalComponent())
