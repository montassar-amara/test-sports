import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team$ = this.store.selectedTeam$.pipe();
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    if(id){
      this.store.fetchTeam(id);
    }
  }
  goBack(){
    this.router.navigate(['/'])
  }

}
