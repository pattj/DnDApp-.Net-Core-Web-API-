var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterRoutingModule } from './character-routing/character-routing.module';
import { CharacterCreatorComponent } from './character-creator/character-creator.component';
var CharacterModule = /** @class */ (function () {
    function CharacterModule() {
    }
    CharacterModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                SharedModule,
                CharacterRoutingModule
            ],
            declarations: [CharactersComponent, CharactersListComponent, CharacterCreatorComponent,],
            exports: [CharactersComponent]
        })
    ], CharacterModule);
    return CharacterModule;
}());
export { CharacterModule };
//# sourceMappingURL=character.module.js.map