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

// load our default (non specific) css
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/screen.scss';

// , "app.application", "app.tweets", "app.about"

angular.module('app', ['ngComponentRouter', 'data-table', 'app.main']);
angular.bootstrap(document, ['app'], {
    strictDi: true
});