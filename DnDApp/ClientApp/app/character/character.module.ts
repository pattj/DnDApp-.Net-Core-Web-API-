import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';



import { CharactersComponent } from './characters/characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterRoutingModule } from './character-routing/character-routing.module';
import { CharacterCreatorComponent } from './character-creator/character-creator.component';
 
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CharacterRoutingModule
  ],
  declarations: [CharactersComponent, CharactersListComponent, CharacterCreatorComponent,  ],
  exports: [CharactersComponent]
})
export class CharacterModule { }
