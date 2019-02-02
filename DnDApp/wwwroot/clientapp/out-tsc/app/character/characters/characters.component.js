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
import { DataService } from '../../core/data.service';
var CharactersComponent = /** @class */ (function () {
    function CharactersComponent(dataService) {
        this.dataService = dataService;
    }
    CharactersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = "Characters";
        this.dataService.getCharacters()
            .subscribe(function (characters) { return _this.Characters = characters; });
        console.log(this.Characters);
    };
    CharactersComponent = __decorate([
        Component({
            selector: 'app-characters',
            templateUrl: './characters.component.html',
            styleUrls: ['./characters.component.css']
        }),
        __metadata("design:paramtypes", [DataService])
    ], CharactersComponent);
    return CharactersComponent;
}());
export { CharactersComponent };
//# sourceMappingURL=characters.component.js.map