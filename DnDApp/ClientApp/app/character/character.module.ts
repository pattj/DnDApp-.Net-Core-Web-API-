import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';



import { CharactersComponent } from './characters/characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterRoutingModule } from './character-routing/character-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CharacterRoutingModule
  ],
  declarations: [CharactersComponent, CharactersListComponent,  ],
  exports: [CharactersComponent]
})
export class CharacterModule { }
