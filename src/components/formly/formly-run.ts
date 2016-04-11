export var formlyRun = ['formlyConfig', 'formlyValidationMessages',
    function(formlyConfig, formlyValidationMessages) {
        formlyConfig.extras.errorExistsAndShouldBeVisibleExpression = 'fc.$touched || form.$submitted';
        formlyValidationMessages.addStringMessage('required', 'Field is required');
        formlyValidationMessages.addStringMessage('email', 'Email has wrong format');
        formlyValidationMessages.addStringMessage('maxlength', 'Text is too long');
        formlyValidationMessages.addStringMessage('minlength', 'Text is too short');
        formlyValidationMessages.addStringMessage('pattern', 'Text has wrong format');
    }
]