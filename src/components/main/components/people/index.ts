import 'angular';
import {PeopleComponent} from './PeopleComponent';
// import {MeComponent} from './components/me/MeComponent';
// import {TeamComponent} from './components/team/TeamComponent';

import './components/me';
import './components/team';

angular.module('app.main.people', ['app.main.people.me', 'app.main.people.team'])
  .component('peopleComponent', new PeopleComponent())
  // .component('meComponent', new MeComponent())
  // .component('teamComponent', new TeamComponent());
