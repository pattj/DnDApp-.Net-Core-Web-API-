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
import { expand } from "rxjs/operators";
import { HttpClient, } from '@angular/common/http';
import { empty, } from 'rxjs';
import { DataService } from '../../core/data.service';
var MonstersComponent = /** @class */ (function () {
    //  count : any;
    function MonstersComponent(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.datas = []; //maybe change the name to results instead and assign to api calls
        this.pageNumber = 1;
    }
    MonstersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = "Monsters";
        this.dataService.getMonsters(this.pageNumber).pipe(expand(function (response) { return response.next ? _this.http.get(response.next) : empty(); }))
            .subscribe(function (Results) {
            //this.datas[this.pageNumber] =Results.results;
            _this.datas = _this.datas.concat(Results.results);
            _this.next = Results.next;
            _this.pageNumber += 1;
            // console.log(this.datas);
            // this.count = Monsters;
        });
    };
    MonstersComponent = __decorate([
        Component({
            selector: 'app-monsters',
            templateUrl: './monsters.component.html',
            styleUrls: ['./monsters.component.css']
        }),
        __metadata("design:paramtypes", [DataService, HttpClient])
    ], MonstersComponent);
    return MonstersComponent;
}());
export { MonstersComponent };
//# sourceMappingURL=monsters.component.js.map