import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class NodejsService {

  constructor(private httpClient:HttpClient, private fireservices:AngularFirestore) { }

  getJson(url:string){
    return this.httpClient.get(url);
  }

  addPhone(body: any) {
    return this.httpClient.post('https://us-central1-pruebaachida.cloudfunctions.net/apis/add', body);
  }


  //angular crud

  getAllPhones()
  {
    return this.fireservices.collection('Cellphones').snapshotChanges();
  }

  deletePhone(id:any){
    return this.httpClient.delete(`https://us-central1-pruebaachida.cloudfunctions.net/apis/del/${id}`);
  }
  

  setPhone(body: any, id: any) {
    return this.httpClient.post(`https://us-central1-pruebaachida.cloudfunctions.net/apis/update/${id}`, body);
  }

}
