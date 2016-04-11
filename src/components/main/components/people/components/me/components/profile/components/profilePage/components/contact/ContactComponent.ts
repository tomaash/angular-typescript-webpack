export class ContactComponent implements ng.IComponentOptions {
  public controller: Function = ContactController;
  public template: string = require('./ContactComponent.html');
}

export class ContactController {
  public static $inject: Array<string> = ["$scope"]

  public model = {};
  public options = {};

  public fields = [
    {
      key: 'date1',
      type: 'datepicker',
      templateOptions: {
        label: 'Date 1',
        type: 'text',
        datepickerPopup: 'dd-MMMM-yyyy'
      }
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      templateOptions: {
        label: 'Disable Date 2',
      }
    },
    {
      key: 'date2',
      type: 'datepicker',
      templateOptions: {
        label: 'Date 2',
        type: 'text',
        datepickerPopup: 'dd-MMMM-yyyy',
        //this houdl override datepicker format on formlyConfig and it did
        datepickerOptions: {
          format: 'dd-MMMM-yyyy'
        }
      },
      expressionProperties: {
        'templateOptions.disabled': 'model.checkbox'
      }
    }
  ];

  public originalFields = angular.copy(this.fields);

  constructor (public $scope: ng.IScope) {

  }

  onSubmit() {
    console.log(this.model);
      // this.options.updateInitialValue();
      // alert(JSON.stringify(vm.model), null, 2);
  }

}
