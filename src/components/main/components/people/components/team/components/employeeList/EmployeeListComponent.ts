import {employeesFixture} from './employeesFixture';

export class EmployeeListComponent implements ng.IComponentOptions {
  public controller: Function = EmployeeListController;
  public template: string = require('./EmployeeListComponent.html');
}

export class EmployeeListController {
  // public route: ng.route.IRouteService;
  // public userInput: string;
  public filter: string;
  // public static $inject: Array<string> = ["$routeParams"] //, "$location", "$rootScope"]; //, "ISharedModel"];

  public filterTypes: Array<string> = [
    'Application',
    'Contracts',
    'References',
    'Certificates',
    'Reviews',
    'Notices',
    'Others'
    ];

  public options = {
    scrollbarV: false,
    sortType: 'single'
  };

  public employees = employeesFixture;

  public data;

  public employeeListType: string;
  public pageTitle: string;
  public filterGroup: string;

  public pageTitles = {
    status: "Status",
    employeeType: "Employee Type"
  }

  public filterGroups = {
    status: ['active', 'offboarding', 'onboarding', 'terminated'],
    employeeType: ['employee', 'student', 'consultant']
  }

  constructor(
    // public $location: ng.ILocationService
    // public $routeParams: ng.route.IRouteParamsService
    // public $location: any,
    // public $rootScope: ng.IRootScopeService
    // public sharedModel: ISharedModel
  ) {
    // this.user = this.$route.current.params.user;
    // console.log("constructor ran!");
    // this.filter = this.$routeParams.g
  }

  public $routerOnActivate(next) {
    // console.log('did run $routerOnActivate');
    // Load up the heroes for this view
    // console.log(next);
    // this.filter = next.params.filter;
    // this.data = this.employees[this.filter];
    // console.log(this);
    this.setupComponent(next);
  };

  public setupComponent(route) {
    this.employeeListType = route.urlPath;
    this.pageTitle = this.pageTitles[this.employeeListType];
    this.filterGroup = this.filterGroups[this.employeeListType];
  }

  public $routerOnReuse(newRoute, oldRoute) {
    // console.log('This will be called twice');
    if (newRoute.urlPath != oldRoute.urlPath) {
      // console.log('This will be called only once once');
      this.setupComponent(newRoute);
    }
    // this.filter = newRoute.params.filter;
    // this.data = this.employees[this.filter];
  }

  public $routerCanReuse() {
    return true;
  }

  public changeFilter(val): void {
    // this.filter = val;
    // this.data = this.employees[val];
    // this.$location.search({"filter" : val});
  }

  // public updateUser(): void {
  //   this.user = this.userInput;
  //   // this.sharedModel.saveRouteToKeep();
  //   this.$route.updateParams({"user" : this.userInput});
  // }

  // public editUser(): void {
  //   this.userInput = this.user;
  // }

}
