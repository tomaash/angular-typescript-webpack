import 'angular';
import {PeopleComponent} from './PeopleComponent';
import {MeComponent} from './components/me/MeComponent';
import {TeamComponent} from './components/team/TeamComponent';

angular.module('app.main.people', [])
  .component('peopleComponent', new PeopleComponent())
  .component('meComponent', new MeComponent())
  .component('teamComponent', new TeamComponent());
