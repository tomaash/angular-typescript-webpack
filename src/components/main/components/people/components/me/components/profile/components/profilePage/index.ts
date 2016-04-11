import 'angular';
import {ProfilePageComponent} from './ProfilePageComponent';
import {AdditionalContactsComponent} from './components/additionalContacts/AdditionalContactsComponent';
import {ContactComponent} from './components/contact/ContactComponent';
import {IdentityComponent} from './components/identity/IdentityComponent';

angular.module('app.main.people.me.profile.profilePage', [])
  .component('profilePageComponent', new ProfilePageComponent())
  .component('additionalContactsComponent', new AdditionalContactsComponent())
  .component('contactComponent', new ContactComponent())
  .component('identityComponent', new IdentityComponent())
