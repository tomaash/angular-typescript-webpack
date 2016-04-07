import {documentsFixture} from './documentsFixture';

export class DocumentsComponent implements ng.IComponentOptions {
  public controller: Function = DocumentsController;
  public template: string = require('./DocumentsComponent.html');
}

export class DocumentsController {
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

  public documents = documentsFixture;

  public data;

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
    this.filter = next.params.filter;
    this.data = this.documents[this.filter];
    // console.log(this);
  };

  public $routerOnReuse(next) {
    // console.log('did run route on reuse');
    this.filter = next.params.filter;
    // this.data = null;
    this.data = this.documents[this.filter];
    console.log(this);
  }

  public $routerCanReuse() {
    return true;
  }

  public changeFilter(val): void {
    // this.filter = val;
    // this.data = this.documents[val];
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
