"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AddUserComponent = (function () {
    function AddUserComponent() {
    }
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    core_1.Component({
        selector: 'adduser',
        templateUrl: 'app/users/add-user.component.html',
        styles: ["\n\n\t.form-container{\n\t\tbackground-color: #f1f1f1;\n\t\tpadding: 30px;\n\t}\n\n\n\t"]
    })
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=add-user.component.js.map