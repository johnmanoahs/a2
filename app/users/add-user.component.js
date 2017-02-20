"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var users_service_1 = require("./users.service");
var router_1 = require("@angular/router");
var user_1 = require("./user");
var AddUserComponent = (function () {
    function AddUserComponent(_adduser, _us, _router, _aroute) {
        this._adduser = _adduser;
        this._us = _us;
        this._router = _router;
        this._aroute = _aroute;
        this.title = "Add a User";
        this.user = new user_1.User();
        this.form = _adduser.group({
            name: [
                '',
                forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            email: [
                '',
                forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            phone: [],
            street: [],
            city: [],
            suite: [],
            zipcode: []
        });
        //console.log(this._router.parseUrl(_router.url));
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._aroute.params.subscribe(function (params) {
            if (params['id']) {
                //this.title = 'Edit User';
                _this.userid = +params['id'];
            }
        });
        this.title = this.userid ? 'Edit User' : 'Add New User';
        if (!this.userid)
            return;
        this._us.getUser(this.userid)
            .subscribe(function (res) {
            _this.user = res;
            console.log(_this.user);
        }, function (response) {
            if (response.status == 404) {
                //console.log('not found')
                _this._router.navigate(['NotFound']);
            }
        });
    };
    AddUserComponent.prototype.OnSubmit = function () {
        var result;
        if (this.userid) {
            result = this._us.updateUser(this.user);
        }
        else {
            result = this._us.addUser(this.user);
        }
        console.log(this.user);
        this.form.markAsPristine();
        //this._us.addUser(this.user)
        result.subscribe(function (res) { return console.log(res); });
        this._router.navigate(['/users']);
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    core_1.Component({
        selector: 'adduser',
        templateUrl: 'app/users/add-user.component.html',
        styles: ["\n\n\t.form-container{\n\t\tbackground-color: #f1f1f1;\n\t\tpadding: 30px;\n\t}\n\n\tinput.ng-touched.ng-invalid{\n\t\tborder: 2px red solid;\n\t}\n\n\n\t"]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        users_service_1.UsersService,
        router_1.Router,
        router_1.ActivatedRoute])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=add-user.component.js.map