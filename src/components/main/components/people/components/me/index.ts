import 'angular';
import {MeComponent} from './MeComponent';
import {ActivitiesComponent} from './components/activities/ActivitiesComponent';
import {DashboardComponent} from './components/dashboard/DashboardComponent';

import './components/profile';

angular.module('app.main.people.me', ['app.main.people.me.profile'])
    .component('meComponent', new MeComponent())
    .component('activitiesComponent', new ActivitiesComponent())
    .component('dashboardComponent', new DashboardComponent())
