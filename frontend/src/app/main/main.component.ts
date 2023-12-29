import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil} from 'rxjs';
import { StoreService } from '../store/store.service';
import ILeague from '../models/league';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  filter?:Partial<ILeague> = undefined;
  selectedLeague?:ILeague = undefined;
  destroy$ = new Subject();
  results$ = this.store.suggestions$.pipe();
  constructor(
    private store: StoreService
  ) { }


  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  ngOnInit(): void {
    this.store.selectedLeague$.pipe(takeUntil(this.destroy$)).subscribe(league=>{
      this.selectedLeague = league;
      if(league){
        this.filter = league;
      }
    })
  }
  selectLeague(league:Partial<ILeague>){
    this.store.fetchLeagueById(league._id!)
  }

  search(filter:string){
    this.store.fetchsFilters(filter);
  }
  clearInput(){
    this.store.resetSearch()
  }
}
