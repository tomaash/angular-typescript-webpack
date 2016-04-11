// import "./modules/application/angular/index";
// import "./modules/tweets/angular/index";
// import "./modules/about/angular/index";

import './components/main';
import 'angular';
import '@angular/router/angular1/angular_1_router.js';

// Data table imports
import 'angular-data-table/release/dataTable.helpers.js';
import 'angular-data-table/release/dataTable.css';
import 'angular-data-table/release/material.css';
import './styles/icons.css';

// JSON Schema form
import 'angular-schema-form';
import 'angular-schema-form-bootstrap';

// Formly
import 'angular-formly';
import 'angular-formly-templates-bootstrap';
import {formlyConfig} from './components/formly/formly-config';
import {formlyRun} from './components/formly/formly-run';
import 'angular-messages';

// Angular UI
import 'angular-ui-bootstrap';

// load our default (non specific) css
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/screen.scss';
import './styles/forms.scss';

// , "app.application", "app.tweets", "app.about"

var app = angular.module('app', [
    'ngComponentRouter',
    'ngMessages',
    'formly',
    'formlyBootstrap',
    'ui.bootstrap',
    'data-table',
    'schemaForm',
    'app.main'
    ]);

app.config(formlyConfig);

app.run(formlyRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});