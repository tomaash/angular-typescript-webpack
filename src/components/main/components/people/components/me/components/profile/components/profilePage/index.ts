import 'angular';
import {ProfilePageComponent} from './ProfilePageComponent';
import {AdditionalContactsComponent} from './components/additionalContacts/AdditionalContactsComponent';
import {IdentityComponent} from './components/identity/IdentityComponent';

angular.module('app.main.people.me.profile.profilePage', [])
  .component('profilePageComponent', new ProfilePageComponent())
  .component('additionalContactsComponent', new AdditionalContactsComponent())
  .component('identityComponent', new IdentityComponent())
