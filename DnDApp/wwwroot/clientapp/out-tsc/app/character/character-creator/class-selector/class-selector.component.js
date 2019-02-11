var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var ClassSelectorComponent = /** @class */ (function () {
    function ClassSelectorComponent() {
    }
    ClassSelectorComponent.prototype.ngOnInit = function () {
    };
    ClassSelectorComponent = __decorate([
        Component({
            selector: 'app-class-selector',
            templateUrl: './class-selector.component.html',
            styleUrls: ['./class-selector.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ClassSelectorComponent);
    return ClassSelectorComponent;
}());
export { ClassSelectorComponent };
//# sourceMappingURL=class-selector.component.js.map