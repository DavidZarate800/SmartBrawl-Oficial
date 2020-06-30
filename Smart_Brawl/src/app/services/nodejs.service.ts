import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NodejsService {

  constructor(private httpClient:HttpClient) { }

  getJson(url:string){
    return this.httpClient.get(url);
  }

}
