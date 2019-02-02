var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = './assets/';
    }
    DataService.prototype.getCharacters = function () {
        return this.http.get('http://localhost:8840/api/character')
            .pipe(catchError(this.handleError));
    };
    DataService.prototype.getUsers = function () {
        return this.http.get('./assets/character.json')
            .pipe(catchError(this.handleError));
    };
    /*
    
    getMonsters(pageNumber: Number): Observable<IMonster> {
      return this.http.get<IMonster>(`https://api-beta.open5e.com/monsters/?page=${pageNumber}`).
        pipe(
          tap(res => console.log(res.next)),
          catchError(this.handleError),
          tap(res => console.log(res)),
          expand(response => response.next ? this.http.get<IMonster>(response.next) : empty()),
          concatMap()
  
          
       
          
        ) ;
  
    }
    */
    /*
    getMonsters(pageNumber: number): Observable<IMonster> {
      return this.http.get<IMonster>(`https://api-beta.open5e.com/monsters/?page=${pageNumber}`).
        pipe(
          tap(res => console.log(res.next)),
          catchError(this.handleError),
          // tap(res => console.log(res)),
          expand(response => response.next ? this.http.get<IMonster>(response.next) : empty()),
          reduce((acc, data) => {
            return acc.concat(data);
        }, []),
        concatMap((res) => {
          console.log(res.length);
          console.log(typeof (res));
          return res;
        }
  
        )
          
  
  
  
  
  
        );
  
    }
    */
    DataService.prototype.getMonsters = function (pageNumber) {
        return this.http.get("https://api-beta.open5e.com/monsters/?page=" + pageNumber).
            pipe(tap(function (res) { return console.log(res.next); }), catchError(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            console.log("testtttt");
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        console.log("testtttt2");
        return Observable.throw(error || 'Node.js server error');
    };
    DataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map