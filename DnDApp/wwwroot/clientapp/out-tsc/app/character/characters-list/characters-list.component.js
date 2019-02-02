var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var CharactersListComponent = /** @class */ (function () {
    function CharactersListComponent() {
    }
    Object.defineProperty(CharactersListComponent.prototype, "Characters", {
        get: function () {
            return this._characters;
        },
        set: function (value) {
            if (value) {
                this._characters = this.Filtered_Characters = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    CharactersListComponent.prototype.ngOnInit = function () {
    };
    CharactersListComponent.prototype.filter = function (data) {
        if (data) {
            this.Filtered_Characters = this.Characters.filter(function (char) {
                return char.Name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    char.toString().indexOf(data) > -1 ||
                    char.Race.toLowerCase().indexOf(data.toLowerCase()) > -1;
            });
            console.log(this.Filtered_Characters);
        }
        else {
            this.Filtered_Characters = this.Characters;
            console.log("test");
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], CharactersListComponent.prototype, "Characters", null);
    CharactersListComponent = __decorate([
        Component({
            selector: 'app-characters-list',
            templateUrl: './characters-list.component.html',
            styleUrls: ['./characters-list.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CharactersListComponent);
    return CharactersListComponent;
}());
export { CharactersListComponent };
//# sourceMappingURL=characters-list.component.js.map