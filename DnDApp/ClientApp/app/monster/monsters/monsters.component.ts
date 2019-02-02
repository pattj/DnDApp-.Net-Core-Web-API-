
import { Component, OnInit } from '@angular/core';
import { concatMap, expand } from "rxjs/operators";
import { HttpClient, } from '@angular/common/http';
import { Observable, empty, concat, } from 'rxjs';

import { IMonster, IMons } from '../../shared/interfaces';
import { DataService } from '../../core/data.service';
import { MonstersListComponent } from '../monsters-list/monsters-list.component';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  title: string;
  Response: Array<any>; //entire JSON body response from get call
  datas: any[] = []; //maybe change the name to results instead and assign to api calls
   
  next: string;
  pageNumber: number;
 //  count : any;
  constructor(private dataService: DataService, private http: HttpClient) {
    this.pageNumber = 1;
    
  }

  ngOnInit() {
    this.title = "Monsters";
    
    this.dataService.getMonsters(this.pageNumber).pipe(

      expand(response => response.next ? this.http.get<IMonster>(response.next) : empty()),
    )
      .subscribe((Results: IMonster) => {
        //this.datas[this.pageNumber] =Results.results;

        this.datas = this.datas.concat(Results.results);
        this.next = Results.next;
         this.pageNumber+=1;
      // console.log(this.datas);
       // this.count = Monsters;
      });



  }

 
}
