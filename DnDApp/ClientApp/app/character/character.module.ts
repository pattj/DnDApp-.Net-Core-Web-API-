import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';



import { CharactersComponent } from './characters/characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterRoutingModule } from './character-routing/character-routing.module';
import { CharacterCreatorModule } from './character-creator/character-creator.module';

 
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CharacterRoutingModule,
    CharacterCreatorModule
  ],
  declarations: [CharactersComponent, CharactersListComponent  ],
  exports: [CharactersComponent]
})
export class CharacterModule { }
