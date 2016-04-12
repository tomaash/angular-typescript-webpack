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
      template: "Personal Details"
    },
    {
      "className": "row",
      "fieldGroup": [
        {
          "className": "col-xs-6",
          key: 'address1',
          type: 'input',
          templateOptions: {
            label: 'Address line 1',
          }
        },
        {
          "className": "col-xs-6",
          key: 'address2',
          type: 'input',
          templateOptions: {
            label: 'Address line 2',
          }
        }
      ]
    }
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
