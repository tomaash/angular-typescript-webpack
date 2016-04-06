export class DocumentsComponent implements ng.IComponentOptions {
  public controller: Function = DocumentsController;
  public template: string = `
    <h1>Documents</h1>
    <div class="btn-group" role="group">
      <button ng-repeat="filterType in $ctrl.filterTypes track by $index" class="btn btn-default" ng-click="$ctrl.changeFilter(filterType)">{{filterType}}</button>
    </div>
    <p> Showing just <b>{{$ctrl.filter}}</b> documents </p>
  `
}

export class DocumentsController {
  // public route: ng.route.IRouteService;
  // public userInput: string;
  public filter: string;
  // public static $inject: Array<string> = ["$route", "$routeParams", "$location", "$rootScope"]; //, "ISharedModel"];

  public filterTypes: Array<string> = [
      'Application',
      'Contracts',
      'References',
      'Certificates',
      'Reviews',
      'Notices',
      'Others'
    ];

  constructor(
    // public $route: ng.route.IRouteService,
    // public $routeParams: ng.route.IRouteParamsService,
    // public $location: any,
    // public $rootScope: ng.IRootScopeService
    // public sharedModel: ISharedModel
  ) {
    // this.user = this.$route.current.params.user;
    console.log("constructor ran!");
  }

  public changeFilter(val): void {
    this.filter = val;
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
