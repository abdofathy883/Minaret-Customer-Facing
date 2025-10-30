import { Injectable } from '@angular/core';
import { ApiService } from '../global-api/api.service';
import { Observable } from 'rxjs';
import { ITeamMember } from '../../models/team/i-team-member';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private endpoint = 'auth';
  constructor(private api: ApiService) { }

  getAll(): Observable<ITeamMember[]> {
    return this.api.get<ITeamMember[]>(`${this.endpoint}/team-memers`);
  }
}
