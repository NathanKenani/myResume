import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumeContent } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private httpClient: HttpClient) { }

  public getContent(): Observable<ResumeContent> {
    return this.httpClient.get<ResumeContent>('assets/data.json');
  }
}
