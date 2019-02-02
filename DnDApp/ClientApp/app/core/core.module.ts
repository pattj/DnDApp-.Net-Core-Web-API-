import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { DataService } from './data.service';
import { SortService } from './sort.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ ],
  providers: [DataService, SortService]
})
export class CoreModule { }
