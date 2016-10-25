System.register(['aurelia-dependency-injection', 'aurelia-binding', './hosts/cordova', './hosts/web', './xp-configuration'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var aurelia_dependency_injection_1, aurelia_binding_1, cordova_1, web_1, xp_configuration_1;
    var AureliaXP;
    return {
        setters:[
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            },
            function (cordova_1_1) {
                cordova_1 = cordova_1_1;
            },
            function (web_1_1) {
                web_1 = web_1_1;
            },
            function (xp_configuration_1_1) {
                xp_configuration_1 = xp_configuration_1_1;
            }],
        execute: function() {
            AureliaXP = (function () {
                function AureliaXP(use, container) {
                    this.use = use;
                    this.container = container;
                    this.availableHosts = [
                        container.get(cordova_1.Cordova),
                        container.get(web_1.Web)
                    ];
                }
                AureliaXP.prototype.platformChanged = function (platform) {
                    this.design = platform.design;
                };
                AureliaXP.prototype.start = function (host) {
                    var _this = this;
                    if (typeof host === 'string') {
                        this.host = this.availableHosts.find(function (x) { return x.type === host; });
                    }
                    else if (!host) {
                        this.host = this.availableHosts.find(function (x) { return x.isAvailable; });
                    }
                    else {
                        this.host = host;
                    }
                    return this.host.start().then(function (platform) {
                        _this.platform = platform;
                    });
                };
                __decorate([
                    aurelia_binding_1.observable
                ], AureliaXP.prototype, "platform", void 0);
                __decorate([
                    aurelia_binding_1.observable
                ], AureliaXP.prototype, "design", void 0);
                AureliaXP = __decorate([
                    aurelia_dependency_injection_1.inject(xp_configuration_1.XpConfiguration, aurelia_dependency_injection_1.Container)
                ], AureliaXP);
                return AureliaXP;
            }());
            exports_1("AureliaXP", AureliaXP);
        }
    }
});
