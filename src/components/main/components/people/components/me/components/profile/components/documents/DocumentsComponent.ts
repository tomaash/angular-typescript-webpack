import {documentsFixture} from './documentsFixture';

export class DocumentsComponent implements ng.IComponentOptions {
  public controller: Function = DocumentsController;
  public template: string = require('./DocumentsComponent.html');
  public bindings = { $router: '<' };
}

export class DocumentsController {
  // public route: ng.route.IRouteService;
  // public userInput: string;
  public filter: string;
  // public static $inject: Array<string> = ["$router"] //, "$location", "$rootScope"]; //, "ISharedModel"];

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
    sortType: 'single',
    selectable: true,
    multiSelect: false
  };

  public formOptions = {};

  public fields = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Title',
      }
    },
    {
      key: 'createdBy',
      type: 'input',
      templateOptions: {
        label: 'Created By',
      }
    },
    {
      key: 'modifiedBy',
      type: 'input',
      templateOptions: {
        label: 'Modified By',
      }
    },
    {
      key: 'createdDate',
      type: 'input',
      templateOptions: {
        label: 'Created Date',
      }
    },
    {
      key: 'modifiedDate',
      type: 'input',
      templateOptions: {
        label: 'Modified Date',
      }
    }
  ];

  public documents = documentsFixture;

  public data;

  public $router;

  public selected = {};

  public detailData;

  constructor(
    // public $router: any
    // public $routeParams: ng.route.IRouteParamsService
    // public $location: any,
    // public $rootScope: ng.IRootScopeService
    // public sharedModel: ISharedModel
  ) {
    // this.user = this.$route.current.params.user;
    // console.log("constructor ran!");
    // this.filter = this.$routeParams.g
  }

  public setupData(next) {
    this.filter = next.params.filter;
    // add id to each record
    this.data = this.documents[this.filter].map((x, i) => {
      x.id = i + "record";
      return x;
    })
    const detailIndex = parseInt(next.params.detail, 10);
    this.detailData = this.data[detailIndex];
  }

  public $routerOnActivate(next) {
    this.setupData(next);
  };

  public $routerOnReuse(newRoute, oldRoute) {
    if (newRoute.urlPath != oldRoute.urlPath) {
      this.setupData(newRoute);
    }
  }

  public $routerCanReuse() {
    return true;
  }

  public onSelect(row) {
    const item = row[0];
    this.$router.navigate(['DocumentDetail', { filter: this.filter, detail: item.id }]);
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
