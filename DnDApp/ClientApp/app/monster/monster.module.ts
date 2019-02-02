import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonstersComponent } from './monsters/monsters.component';
import { MonstersListComponent } from './monsters-list/monsters-list.component';
import { SharedModule } from '../shared/shared.module';
import { MonsterRoutingModule } from './monster-routing/monster-routing.module';
import { MonsterInfoComponent } from './monster-info/monster-info.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MonsterRoutingModule
  ],
  declarations: [MonstersComponent, MonstersListComponent, MonsterInfoComponent],
  exports: [MonstersComponent, MonstersListComponent, MonsterInfoComponent]
})
export class MonsterModule { }
