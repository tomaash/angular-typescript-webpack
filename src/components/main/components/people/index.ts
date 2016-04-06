import 'angular';
import {PeopleComponent} from './PeopleComponent';
// import {MeComponent} from './components/me/MeComponent';
import {TeamComponent} from './components/team/TeamComponent';

import './components/me';

angular.module('app.main.people', ['app.main.people.me'])
  .component('peopleComponent', new PeopleComponent())
  // .component('meComponent', new MeComponent())
  .component('teamComponent', new TeamComponent());
