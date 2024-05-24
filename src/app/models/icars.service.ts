import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icars } from './icars';

@Injectable({
  providedIn: 'root'
})
export class IcarsService {
  private jsonUrl = "assets/db.json"
  constructor(private http: HttpClient) {}
  getCars(): Observable<Icars[]> {
    return this.http.get<Icars[]>(this.jsonUrl)
  }


}
