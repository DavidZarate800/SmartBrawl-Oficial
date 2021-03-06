import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient) { }
  sendMessage(body: any) {
    return this.http.post('https://us-central1-pruebaachida.cloudfunctions.net/apis/form', body);
  }

  sendCalif(body: any){
    return this.http.post('http://localhost:5000/pruebaachida/us-central1/apis/addCalif', body);
  }
}

