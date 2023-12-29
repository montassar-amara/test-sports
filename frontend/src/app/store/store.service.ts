import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BehaviorSubject, catchError, of, take, tap } from 'rxjs';
import ILeague from '../models/league';
import ITeam from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  suggestions$ = new BehaviorSubject<Partial<ILeague>[]>([]);
  selectedLeague$ = new BehaviorSubject<ILeague|undefined>(undefined);
  selectedTeam$ = new BehaviorSubject<ITeam|undefined>(undefined);
  error$ = new BehaviorSubject<string>("");
  constructor(
    private apiService: ApiService
  ) { }

  fetchsFilters(filter:any){
    this.apiService.filterLeagues(filter.query).pipe(
      catchError((err:any)=>{
        this.error$.next(err.error.message || err.statusText)
        return of(err);
      }),
      take(1),
      tap((res:any)=>{
        if(!res.error){
          this.suggestions$.next(res.leagues)
        }
      })
    ).subscribe()
  }

  resetSearch(){
    this.suggestions$.next([]);
    this.selectedLeague$.next(undefined)
  }

  fetchLeagueById(id:string){
    this.apiService.fetchLeagueById(id).pipe(
      catchError((err:any)=>{
        this.error$.next(err.error.message || err.statusText)
        return of(err);
      }),
      take(1),
      tap((res:any)=>{
        if(!res.error){
          this.selectedLeague$.next(res.league)
        }
      })
    ).subscribe()
  }

  fetchTeam(id:string){
    this.apiService.fetchTeamById(id).pipe(
      catchError((err:any)=>{
        this.error$.next(err.error.message || err.statusText)
        console.log(err)
        return of(err);
      }),
      take(1),
      tap((res:any)=>{
        if(!res.error){
          this.selectedTeam$.next(res.team)
        }
      })
    ).subscribe()
  }
}
