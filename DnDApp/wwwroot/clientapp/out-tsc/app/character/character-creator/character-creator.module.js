var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceSelectorComponent } from './race-selector/race-selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';
import { PointDistributorComponent } from './point-distributor/point-distributor.component';
var CharacterCreatorModule = /** @class */ (function () {
    function CharacterCreatorModule() {
    }
    CharacterCreatorModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [RaceSelectorComponent, ClassSelectorComponent, PointDistributorComponent]
        })
    ], CharacterCreatorModule);
    return CharacterCreatorModule;
}());
export { CharacterCreatorModule };
//# sourceMappingURL=character-creator.module.js.map