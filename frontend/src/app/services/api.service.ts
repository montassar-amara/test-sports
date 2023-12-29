import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import ILeague from '../models/league';
import ITeam from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  filterLeagues(filter:string){
    return this.http.post<{leagues:Partial<ILeague>[]}>(environment.api+"leagues",{filter});
  }
  fetchLeagueById(id:string){
    return this.http.get<{league:ILeague}>(environment.api+"league/"+id);
  }
  fetchTeamById(id:string){
    return this.http.get<{team:ITeam}>(environment.api+"team/"+id);
  }
}
