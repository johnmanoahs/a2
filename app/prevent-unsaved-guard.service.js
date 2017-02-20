"use strict";
var PreventUnsavedGuard = (function () {
    function PreventUnsavedGuard() {
    }
    PreventUnsavedGuard.prototype.canDeactivate = function (component) {
        if (component.form.dirty) {
            return confirm("Are you sure?");
        }
        return true;
    };
    return PreventUnsavedGuard;
}());
exports.PreventUnsavedGuard = PreventUnsavedGuard;
//# sourceMappingURL=prevent-unsaved-guard.service.js.map