import {nationalities} from '../identity/nationalities';
import {countries} from '../identity/countries';
import {bloodGroups} from '../identity/blood-groups';

export class ContactComponent implements ng.IComponentOptions {
  public controller: Function = ContactController;
  public template: string = require('./ContactComponent.html');
}

export class ContactController {
  public static $inject: Array<string> = ['$scope'];

  public model = {};
  public options = {};

  public expandOptions(arr) {
    return arr.map(function(x){
      return {
        name: x,
        value: x
      }
    });
  }

  public fields = [
    {
      key: 'title',
      type: 'select',
      templateOptions: {
        required: true,
        label: 'Title',
        options: this.expandOptions(['Mr', 'Mrs', 'Miss','Ms','Dr','Professor'])
      }
    },
    {
      key: 'givenName',
      type: 'input',
      templateOptions: {
        required: true,
        minlength: 2,
        label: 'Given name',
      }
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        required: true,
        minlength: 2,
        label: 'Last name',
      }
    },
    {
      key: 'alsoKnownAs',
      type: 'input',
      templateOptions: {
        minlength: 2,
        label: 'Also known as',
        placeholder: "Nickname or alias",
      }
    },
    {
      key: 'maidenName',
      type: 'input',
      templateOptions: {
        minlength: 2,
        label: 'Maiden name',
      }
    },
    {
      key: 'primaryNationality',
      type: 'select',
      templateOptions: {
        required: true,
        label: 'Title',
        options: this.expandOptions(nationalities)
      }
    },
    {
      key: 'dateOfBirth',
      type: 'datepicker',
      templateOptions: {
        required: true,
        type: 'text',
        label: 'Date of birth',
        datepickerPopup: 'dd-MMMM-yyyy',
        datepickerOptions: {
          format: 'dd-MMMM-yyyy'
        }
      }
    },
    {
      key: 'placeOfBirth',
      type: 'input',
      templateOptions: {
        label: 'Place of birth',
      }
    },
    {
      key: 'birthCountry',
      type: 'select',
      templateOptions: {
        label: 'Birth country',
        options: countries
      }
    },
    {
      key: 'maritalStatus',
      type: 'select',
      templateOptions: {
        label: 'Marital status',
        options: this.expandOptions(['Single', 'Married', 'Separated', 'Divorced', 'Widowed'])
      }
    },
    {
      key: 'bloodGroup',
      type: 'select',
      templateOptions: {
        label: 'Blood group',
        options: bloodGroups
      }
    },
    {
      key: 'gender',
      type: 'select',
      templateOptions: {
        label: 'Gender',
        options: this.expandOptions(['Male', 'Female', 'Undefined'])
      }
    },

  ]

  public originalFields = angular.copy(this.fields);

  constructor (public $scope: ng.IScope) {

  }

  onSubmit() {
    console.log(this.model);
      // this.options.updateInitialValue();
      // alert(JSON.stringify(vm.model), null, 2);
  }

}
