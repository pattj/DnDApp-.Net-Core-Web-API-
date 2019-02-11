import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceSelectorComponent } from './race-selector/race-selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';
import { PointDistributorComponent } from './point-distributor/point-distributor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RaceSelectorComponent, ClassSelectorComponent, PointDistributorComponent]
})
export class CharacterCreatorModule { }
