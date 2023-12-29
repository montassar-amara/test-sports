import { Component, Input, OnInit } from '@angular/core';
import IPlayer from '../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player!:IPlayer;
  constructor() { }

  ngOnInit(): void {
  }

}
