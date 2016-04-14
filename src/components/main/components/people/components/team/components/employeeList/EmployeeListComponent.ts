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

  public allColumns = [
    { name: 'Full Name', prop: 'fullName'},
    { name: 'Team', prop: 'team'},
    { name: 'Job Role', prop: 'jobRole' },
    { name: 'Status', prop: 'status' },
    { name: 'Employee Type', prop: 'employeeType' },
    { name: 'Alerts', prop: 'alerts' }
  ]

  public options = {
    scrollbarV: false,
    sortType: 'single',
    columns: this.allColumns
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
    this.setupComponent(next);
  };

  public setupComponent(route) {
    this.employeeListType = route.params.group;
    this.filter = route.params.filter;
    this.pageTitle = this.pageTitles[this.employeeListType];
    this.filterGroup = this.filterGroups[this.employeeListType];
    if (this.employeeListType) {
      // When filtering by list type, exclude it from columns
      this.options.columns = this.allColumns.filter((x) => x.prop != this.employeeListType);
      this.data = employeesFixture[this.employeeListType][this.filter];
    } else {
      this.data = employeesFixture.all;
      this.options.columns = this.allColumns
    }
  }

  public $routerOnReuse(newRoute, oldRoute) {
    if (newRoute.urlPath != oldRoute.urlPath) {
      this.setupComponent(newRoute);
    }
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
