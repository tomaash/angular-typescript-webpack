import {nationalities} from './nationalities';

export class IdentityComponent implements ng.IComponentOptions {
  public controller: Function = IdentityController;
  public template: string = require('./IdentityComponent.html');
}

export class IdentityController {
  public static $inject: Array<string> = ["$scope"]

  constructor (public $scope: ng.IScope) {

  }

  public schema = {
    type: "object",
    properties: {
      title: {
        required: true,
        title: "Title",
        type: "string",
        enum: ['Mr', 'Mrs', 'Miss','Ms','Dr','Professor']
      },
      givenName: {
        required: true,
        type: "string",
        minLength: 2,
        title: "Given name"
      },
      lastName: {
        required: true,
        type: "string",
        minLength: 2,
        title: "Last name",
      },
      alsoKnownAs: {
        type: "string",
        minLength: 2,
        title: "Also known as",
        description: "Nickname or alias"
      },
      maidenName: {
        type: "string",
        minLength: 2,
        title: "Maiden name",
      },
      primaryNationality: {
        type: "string",
        title: "Primary nationality",
        enum: nationalities
      }
    }
  };

  public form = [
    "*",
    {
      type: "submit",
      title: "Save"
    }
  ];

  public model = {};

  public submitForm(form) {
    // First we broadcast an event so all fields validate themselves
    this.$scope.$broadcast('schemaFormValidate');
    // Then we check if the form is valid
    if (form.$valid) {
      alert('You did it!');
    }
  }

}
