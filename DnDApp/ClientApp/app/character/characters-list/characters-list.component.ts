import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character'
import { ICharacter } from '../../shared/interfaces'


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

 // Characters: Character[];
  private _characters: Character[]; //original list of characters before filter, for when user clears filter
  Filtered_Characters: Character[];

  @Input() get Characters(): Character[] {

    return this._characters;
  }


  set Characters(value: Character[]) {
    if (value) {
      this._characters = this.Filtered_Characters = value;
    }
     
  }


  constructor() { }

  ngOnInit() {

   

  }

  filter(data: string) {
    if (data) {
      this.Filtered_Characters = this.Characters.filter((char: Character) => {
        return char.Name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          char.toString().indexOf(data) > -1 ||
          char.Race.toLowerCase().indexOf(data.toLowerCase()) > -1;
      });
      console.log(this.Filtered_Characters);
    } else {
      this.Filtered_Characters = this.Characters;
      console.log("test");
    }
  }


}
