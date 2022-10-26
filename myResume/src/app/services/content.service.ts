import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient) { }

  public getContent() {
	console.log("Service call working!");
	this.httpClient.get("assets/data.json").subscribe(data =>{
	console.log(data);
	})
  }
}
