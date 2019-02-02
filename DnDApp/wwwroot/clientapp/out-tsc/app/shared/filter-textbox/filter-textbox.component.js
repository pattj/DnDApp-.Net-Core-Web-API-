var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var FilterTextboxComponent = /** @class */ (function () {
    function FilterTextboxComponent() {
        this.changed = new EventEmitter();
    }
    Object.defineProperty(FilterTextboxComponent.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        set: function (value) {
            this._filter = value;
            this.changed.emit(this.filter); //emit the changed output property
            console.log(this.filter);
        },
        enumerable: true,
        configurable: true
    });
    ;
    FilterTextboxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], FilterTextboxComponent.prototype, "filter", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], FilterTextboxComponent.prototype, "changed", void 0);
    FilterTextboxComponent = __decorate([
        Component({
            selector: 'app-filter-textbox',
            template: "\n        Filter: <input type=\"text\" [(ngModel)]=\"filter\" />\n    "
        }),
        __metadata("design:paramtypes", [])
    ], FilterTextboxComponent);
    return FilterTextboxComponent;
}());
export { FilterTextboxComponent };
//# sourceMappingURL=filter-textbox.component.js.map