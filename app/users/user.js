"use strict";
var address = (function () {
    function address() {
    }
    return address;
}());
exports.address = address;
var User = (function () {
    function User() {
        this.address = new address();
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map