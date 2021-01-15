import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PAG_SIMULATOR_API = "http://localhost:80";

@Injectable({
  providedIn: 'root'
})
export class PagSimulatorAPIService {

  constructor(private http: HttpClient) { }

  result$ = new EventEmitter();
  step$ = new EventEmitter();

  pagingPolicy(data) : Observable<any> {
    return this.http.post<any>('/api/v1/pagingPolicy', data);
  }
}
