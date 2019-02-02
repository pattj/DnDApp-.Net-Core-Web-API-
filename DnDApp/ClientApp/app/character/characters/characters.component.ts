import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { DataService } from '../../core/data.service'
import { ICharacter } from '../../shared/interfaces'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  title: string;
  character: Character;
  Characters: any[];

  ngOnInit() {
    this.title = "Characters";
    this.dataService.getCharacters()
      .subscribe((characters: ICharacter[]) => this.Characters = characters);
    console.log(this.Characters);
  }




  constructor(private dataService: DataService) { }


}

