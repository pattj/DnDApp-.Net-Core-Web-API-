import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from   '@angular/forms';

import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { CapitalizePipe } from './capitalize.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FilterTextboxComponent, CapitalizePipe],
  exports: [FilterTextboxComponent, CapitalizePipe]
})
export class SharedModule { }
