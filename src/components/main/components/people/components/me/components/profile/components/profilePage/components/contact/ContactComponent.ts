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
    return arr.map(function (x) {
      return {
        name: x,
        value: x
      }
    });
  }

  public timeUnits = this.expandOptions(["Day", "Week", "Month", "Year"]);

  public fields = [
    {
      className: "form-section-label",
      template: "Identity"
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-3",
          key: 'title',
          type: 'select',
          templateOptions: {
            required: true,
            label: 'Title',
            options: this.expandOptions(['Mr', 'Mrs', 'Miss', 'Ms', 'Dr', 'Professor'])
          }
        }]
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-6",
          key: 'givenName',
          type: 'input',
          templateOptions: {
            required: true,
            minlength: 2,
            label: 'Given name',
          }
        },
        {
          "className": "col-xs-6",
          key: 'lastName',
          type: 'input',
          templateOptions: {
            required: true,
            minlength: 2,
            label: 'Last name',
          }
        }
      ]
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-6",
          key: 'alsoKnownAs',
          type: 'input',
          templateOptions: {
            minlength: 2,
            label: 'Also known as',
            placeholder: "Nickname or alias",
          }
        },
        {
          "className": "col-xs-6",
          key: 'maidenName',
          type: 'input',
          templateOptions: {
            minlength: 2,
            label: 'Maiden name',
          }
        }
      ]
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-6",
          key: 'primaryNationality',
          type: 'select',
          templateOptions: {
            required: true,
            label: 'Primary nationality',
            options: this.expandOptions(nationalities)
          }
        }
      ]
    },
    {
      className: "form-section-label",
      template: "General Details"
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-4",
          key: 'dateOfBirth',
          type: 'datepicker',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'Date of birth',
            datepickerPopup: 'dd-MM-yy',
            datepickerOptions: {
              format: 'dd-MM-yy',
            }
          }
        },
        {
          "className": "col-xs-4",
          key: 'placeOfBirth',
          type: 'input',
          templateOptions: {
            label: 'Place of birth',
          }
        },
        {
          "className": "col-xs-4",
          key: 'birthCountry',
          type: 'select',
          templateOptions: {
            label: 'Birth country',
            options: countries
          }
        }
      ]
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-4",
          key: 'maritalStatus',
          type: 'select',
          templateOptions: {
            label: 'Marital status',
            options: this.expandOptions(['Single', 'Married', 'Separated', 'Divorced', 'Widowed'])
          }
        },
        {
          "className": "col-xs-4",
          key: 'bloodGroup',
          type: 'select',
          templateOptions: {
            label: 'Blood group',
            options: bloodGroups
          }
        },
        {
          "className": "col-xs-4",
          key: 'gender',
          type: 'select',
          templateOptions: {
            label: 'Gender',
            options: this.expandOptions(['Male', 'Female', 'Undefined'])
          }
        }
      ]
    },
    {
      className: "form-section-label",
      template: "Identification Documents"
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-5",
          key: 'nationalIdentityNumber',
          type: 'input',
          templateOptions: {
            label: 'Nation identity number',
          }
        },
        {
          "className": "col-xs-7",
          key: 'nationalIdentityIssueCountry',
          type: 'select',
          templateOptions: {
            label: 'National Identity Issue Country',
            options: countries
          }
        }
      ]
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-5",
          key: 'passportNumber',
          type: 'input',
          templateOptions: {
            label: 'Passport number',
          }
        },
        {
          "className": "col-xs-7",
          key: 'passportIssueCountry',
          type: 'select',
          templateOptions: {
            label: 'Passport Issue Country',
            options: countries
          }
        }
      ]
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-5",
          key: 'drivingLicenseNumber',
          type: 'input',
          templateOptions: {
            label: 'Driving license number',
          }
        },
        {
          "className": "col-xs-7",
          key: 'drivingLicenseIssueCountry',
          type: 'select',
          templateOptions: {
            label: 'Driving License Issue Country',
            options: countries
          }
        }
      ]
    },
    {
      className: "form-section-label",
      template: "Employment Details"
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-6",
          key: 'mtTaxNo',
          type: 'input',
          templateOptions: {
            label: 'Tax indentification number',
          }
        },
        {
          "className": "col-xs-6",
          key: 'mtInsNo',
          type: 'input',
          templateOptions: {
            label: 'National insurance number',
          }
        }
      ]
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-2",
          key: 'probationPeriod',
          type: 'input',
          templateOptions: {
            label: 'Probation period',
          }
        },
        {
          "className": "col-xs-4",
          key: 'probationPeriodUnit',
          type: 'select',
          templateOptions: {
            label: 'Probation period unit',
            options: this.timeUnits
          }
        },
        {
          "className": "col-xs-2",
          key: 'noticePeriod',
          type: 'input',
          templateOptions: {
            label: 'Notice period',
          }
        },
        {
          "className": "col-xs-4",
          key: 'noticePeriodUnit',
          type: 'select',
          templateOptions: {
            label: ' Notice period unit ',
            options: this.timeUnits
          }
        },
      ]
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-2",
          key: 'retirementAge',
          type: 'input',
          templateOptions: {
            label: 'Retirement age',
          }
        }
      ]
    },
    {
      className: "form-section-label",
      template: "Reference"
    },
  ];

  public originalFields = angular.copy(this.fields);

  constructor(public $scope: ng.IScope) {

  }

  onSubmit() {
    console.log(this.model);
    // this.options.updateInitialValue();
    // alert(JSON.stringify(vm.model), null, 2);
  }

}
