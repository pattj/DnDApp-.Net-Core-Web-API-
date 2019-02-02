import { Component, OnInit , Input} from '@angular/core';

//import { m } from '../monsters/monsters.component'; 
import { IMonster } from '../../shared/interfaces';

@Component({
  selector: 'app-monsters-list',
  templateUrl: './monsters-list.component.html',
  styleUrls: ['./monsters-list.component.css']
})
export class MonstersListComponent implements OnInit {

  @Input() Monsters: any[] = [];
  selectedMonster: Array<any>;
  constructor() { }

  ngOnInit() {
  }

  showMonsters(monsterName: string) {

    this.selectedMonster = this.Monsters.filter((monsters: any) => monsters.name == monsterName);
  
  
    
  }

}
