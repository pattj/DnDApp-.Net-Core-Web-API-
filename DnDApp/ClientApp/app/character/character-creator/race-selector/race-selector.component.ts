import { Component, OnInit } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

import { IRace } from '../../../shared/interfaces';
import { DataService } from '../../../core/data.service';

@Component({
  selector: 'app-race-selector',
  templateUrl: './race-selector.component.html',
  styleUrls: ['./race-selector.component.css']
})
export class RaceSelectorComponent implements OnInit {

    Response: any;
    raceList: Array<any>;

  //get list of character races from api
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getRaces()
            .subscribe((raceList: IRace[]) => {
                this.Response = raceList;
                this.raceList = this.Response.avaliableRaces ;
            });
        
         
  }


    showRaces() {

        console.log(this.Response.avaliableRaces);
        console.log(this.raceList);
        



    }

}
