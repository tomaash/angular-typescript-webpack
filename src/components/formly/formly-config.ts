export var formlyConfig = ['formlyConfigProvider', function config(formlyConfigProvider) {

    var attributes = [
        'date-disabled',
        'custom-class',
        'show-weeks',
        'starting-day',
        'init-date',
        'min-mode',
        'max-mode',
        'format-day',
        'format-month',
        'format-year',
        'format-day-header',
        'format-day-title',
        'format-month-title',
        'year-range',
        'shortcut-propagation',
        'datepicker-popup',
        'show-button-bar',
        'current-text',
        'clear-text',
        'close-text',
        'close-on-date-selection',
        'datepicker-append-to-body'
    ];

    var bindings = [
        'datepicker-mode',
        'min-date',
        'max-date'
    ];

    var ngModelAttrs = {};

    angular.forEach(attributes, function(attr) {
        ngModelAttrs[camelize(attr)] = {attribute: attr};
    });

    angular.forEach(bindings, function(binding) {
        ngModelAttrs[camelize(binding)] = {bound: binding};
    });

    formlyConfigProvider.setType({
        name: 'datepicker',
        template: require('./datepicker.html'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        defaultOptions: {
        ngModelAttrs: ngModelAttrs,
        templateOptions: {
            datepickerOptions: {
            format: 'MM.dd.yyyy',
            initDate: new Date()
            }
        }
        },
        controller: ['$scope', function ($scope) {
        $scope.datepicker = {};

        $scope.datepicker.opened = false;

        $scope.datepicker.open = function ($event) {
            $scope.datepicker.opened = !$scope.datepicker.opened;
        };
        }]
    });

    formlyConfigProvider.setWrapper({
      name: 'validation',
      types: ['input', 'select', 'datepicker'],
      template: require('./error-messages.html')
    });

    function camelize(string) {
        string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
            return chr ? chr.toUpperCase() : '';
        });
        // Ensure 1st char is always lowercase
        return string.replace(/^([A-Z])/, function(match, chr) {
            return chr ? chr.toLowerCase() : '';
        });
    }

}]