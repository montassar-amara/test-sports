import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';
import ITeam from '../models/team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  league$ = this.store.selectedLeague$.pipe();

  constructor(private store:StoreService, private router: Router) { }

  ngOnInit(): void {
  }

  showTeam(team:ITeam){
    this.router.navigate(['team',team._id]);
  }

}
