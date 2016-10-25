var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", 'aurelia-dependency-injection', '../designs/material-design'], function (require, exports, aurelia_dependency_injection_1, material_design_1) {
    "use strict";
    var Web = (function () {
        function Web(design) {
            this.design = design;
            this.type = 'web';
            this.isAvailable = true;
        }
        Web.prototype.start = function () {
            var _this = this;
            return Promise.resolve().then(function () { return _this; });
        };
        Web = __decorate([
            aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
        ], Web);
        return Web;
    }());
    exports.Web = Web;
});
