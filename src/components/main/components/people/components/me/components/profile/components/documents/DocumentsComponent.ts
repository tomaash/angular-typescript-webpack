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
    scrollbarV: false
  };

  public documents = {
    Application: [
      { title: 'Job Application', createdBy: 'Jake', modifiedBy: 'Test', createdDate: new Date("2015/1/1"), modifiedDate: new Date("2015/3/2") },
      { title: 'New Contract', createdBy: 'Zorro', modifiedBy: 'Test', createdDate: new Date("2015/2/1"), modifiedDate: new Date("2015/9/2") },
      { title: 'Referred by someone', createdBy: 'Martin', modifiedBy: 'Foo', createdDate: new Date("2015/3/1"), modifiedDate: new Date("2015/5/2") },
      { title: 'Skill level up', createdBy: 'Garry', modifiedBy: 'Test', createdDate: new Date("2015/4/1"), modifiedDate: new Date("2015/1/2") },
      { title: 'Well done on this', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/6/1"), modifiedDate: new Date("2015/8/9") },
      { title: 'Keep in mind', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/7/1"), modifiedDate: new Date("2015/8/1") },
      { title: 'Keep in mind', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/7/1"), modifiedDate: new Date("2015/8/1") },
      { title: 'Keep in mind', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/7/1"), modifiedDate: new Date("2015/8/1") },
    ],
    Contracts: [
      { title: 'New Contract', createdBy: 'Zorro', modifiedBy: 'Test', createdDate: new Date("2015/2/1"), modifiedDate: new Date("2015/9/2") },
      { title: 'Contracting job application', createdBy: 'Jake', modifiedBy: 'Test', createdDate: new Date("2015/1/1"), modifiedDate: new Date("2015/3/2") },
      { title: 'Referred by someone', createdBy: 'Martin', modifiedBy: 'Test', createdDate: new Date("2015/3/1"), modifiedDate: new Date("2015/5/2") },
      { title: 'Skill level up', createdBy: 'Garry', modifiedBy: 'Test', createdDate: new Date("2015/4/1"), modifiedDate: new Date("2015/1/2") },
      { title: 'Well done on this', createdBy: 'Augusto', modifiedBy: 'Bar', createdDate: new Date("2015/6/1"), modifiedDate: new Date("2015/8/9") },
      { title: 'Keep in mind', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/7/1"), modifiedDate: new Date("2015/8/1") },
    ],
    References: [
      { title: 'Referenced by Application', createdBy: 'Jake', modifiedBy: 'Test', createdDate: new Date("2015/1/1"), modifiedDate: new Date("2015/3/2") },
      { title: 'New Contract', createdBy: 'Zorro', modifiedBy: 'Test', createdDate: new Date("2015/2/1"), modifiedDate: new Date("2015/9/2") },
      { title: 'Referred by someone', createdBy: 'Martin', modifiedBy: 'Test', createdDate: new Date("2015/3/1"), modifiedDate: new Date("2015/5/2") },
      { title: 'Skill level up', createdBy: 'Garry', modifiedBy: 'Test', createdDate: new Date("2015/4/1"), modifiedDate: new Date("2015/1/2") },
      { title: 'Well done on this', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/6/1"), modifiedDate: new Date("2015/8/9") },
      { title: 'Keep in mind', createdBy: 'Augusto', modifiedBy: 'Baz', createdDate: new Date("2015/7/1"), modifiedDate: new Date("2015/8/1") },
    ],
    Certificates: [
      { title: 'Certificate Application', createdBy: 'Jake', modifiedBy: 'Quux', createdDate: new Date("2015/1/1"), modifiedDate: new Date("2015/3/2") },
      { title: 'New Contract', createdBy: 'Zorro', modifiedBy: 'Test', createdDate: new Date("2015/2/1"), modifiedDate: new Date("2015/9/2") },
      { title: 'Referred by someone', createdBy: 'Martin', modifiedBy: 'Test', createdDate: new Date("2015/3/1"), modifiedDate: new Date("2015/5/2") },
      { title: 'Skill level up', createdBy: 'Garry', modifiedBy: 'Test', createdDate: new Date("2015/4/1"), modifiedDate: new Date("2015/1/2") },
      { title: 'Well done on this', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/6/1"), modifiedDate: new Date("2015/8/9") },
      { title: 'Keep in mind', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/7/1"), modifiedDate: new Date("2015/8/1") },
    ],
    Reviews: [
      { title: 'Review Job Application', createdBy: 'Jake', modifiedBy: 'Spam', createdDate: new Date("2015/1/1"), modifiedDate: new Date("2015/3/2") },
      { title: 'New Contract', createdBy: 'Zorro', modifiedBy: 'Test', createdDate: new Date("2015/2/1"), modifiedDate: new Date("2015/9/2") },
      { title: 'Referred by someone', createdBy: 'Martin', modifiedBy: 'Test', createdDate: new Date("2015/3/1"), modifiedDate: new Date("2015/5/2") },
      { title: 'Skill level up', createdBy: 'Garry', modifiedBy: 'Test', createdDate: new Date("2015/4/1"), modifiedDate: new Date("2015/1/2") },
      { title: 'Well done on this', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/6/1"), modifiedDate: new Date("2015/8/9") },
      { title: 'Keep in mind', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/7/1"), modifiedDate: new Date("2015/8/1") },
    ],
    Notices: [
      { title: 'Notice Job Application', createdBy: 'Jake', modifiedBy: 'Test', createdDate: new Date("2015/1/1"), modifiedDate: new Date("2015/3/2") },
      { title: 'New Contract', createdBy: 'Zorro', modifiedBy: 'Ham', createdDate: new Date("2015/2/1"), modifiedDate: new Date("2015/9/2") },
      { title: 'Referred by someone', createdBy: 'Martin', modifiedBy: 'Test', createdDate: new Date("2015/3/1"), modifiedDate: new Date("2015/5/2") },
      { title: 'Skill level up', createdBy: 'Garry', modifiedBy: 'Test', createdDate: new Date("2015/4/1"), modifiedDate: new Date("2015/1/2") },
      { title: 'Well done on this', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/6/1"), modifiedDate: new Date("2015/8/9") },
      { title: 'Keep in mind', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/7/1"), modifiedDate: new Date("2015/8/1") },
    ],
    Others: [
      { title: 'Other Job Application', createdBy: 'Jake', modifiedBy: 'Test', createdDate: new Date("2015/1/1"), modifiedDate: new Date("2015/3/2") },
      { title: 'New Contract', createdBy: 'Zorro', modifiedBy: 'Test', createdDate: new Date("2015/2/1"), modifiedDate: new Date("2015/9/2") },
      { title: 'Referred by someone', createdBy: 'Martin', modifiedBy: 'Test', createdDate: new Date("2015/3/1"), modifiedDate: new Date("2015/5/2") },
      { title: 'Skill level up', createdBy: 'Garry', modifiedBy: 'Test', createdDate: new Date("2015/4/1"), modifiedDate: new Date("2015/1/2") },
      { title: 'Well done on this', createdBy: 'Augusto', modifiedBy: 'Eggs', createdDate: new Date("2015/6/1"), modifiedDate: new Date("2015/8/9") },
      { title: 'Keep in mind', createdBy: 'Augusto', modifiedBy: 'Test', createdDate: new Date("2015/7/1"), modifiedDate: new Date("2015/8/1") },
    ],

  }

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
