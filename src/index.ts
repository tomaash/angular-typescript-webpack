// import "./modules/application/angular/index";
// import "./modules/tweets/angular/index";
// import "./modules/about/angular/index";

import "./components/main";
import "angular";
import '@angular/router/angular1/angular_1_router.js';

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";

// , "app.application", "app.tweets", "app.about"

angular.module("app", ['ngComponentRouter', "app.main"]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});