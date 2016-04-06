import 'angular';
import {ProfileComponent} from './ProfileComponent';
import {DocumentsComponent} from './components/documents/DocumentsComponent';
import {OverviewComponent} from './components/overview/OverviewComponent';

import './components/profilePage';

// import {ProfilePageComponent} from './components/profilePage/ProfilePageComponent';

angular.module('app.main.people.me.profile', ['app.main.people.me.profile.profilePage'])
  .component('profileComponent', new ProfileComponent())
  .component('overviewComponent', new OverviewComponent())
  // .component('profilePageComponent', new ProfilePageComponent())
  .component('documentsComponent', new DocumentsComponent())
