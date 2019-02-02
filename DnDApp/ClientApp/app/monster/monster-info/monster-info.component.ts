import { Component, OnInit, Input } from '@angular/core';
import { IMons } from '../../shared/interfaces'

@Component({
  selector: 'app-monster-info',
  templateUrl: './monster-info.component.html',
  styleUrls: ['./monster-info.component.css']
})
export class MonsterInfoComponent implements OnInit {

  @Input() receivedMonster: IMons; 

  constructor() {
    
  }

  ngOnInit() {
  }

 

}
