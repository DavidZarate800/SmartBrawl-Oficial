import { Component, OnInit } from '@angular/core';
import { NodejsService } from '../services/nodejs.service';
import swal from '../../../node_modules/sweetalert';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})

export class LoggedinComponent implements OnInit {
  cellphone: any;
  cont: number = 0;
  cel1: any;
  cel2: any;
  bandera: boolean;
  band2: boolean;
  constructor(private nodejs: NodejsService) { }

  ngOnInit(): void {
  }
  
  comparar(cell: any){
    if(this.cont == 1){
      this.cel2 = this.cel1;
      this.cel1 = cell;
      this.band2 = true;
    }
    if(this.cont == 0){
      this.cel1 = cell;
      this.cont++;
    }
    swal('Cellphone added to the queue!', 'Go to the bottom of the page', 'success');
  }

  desplegar(){
    this.bandera = true;
    this.nodejs.getAllPhones().subscribe(data => {
      this.cellphone = data.map(e => {
        return {
          marca: e.payload.doc.data()['Brand'],
          nombre: e.payload.doc.data()['Name'],
          cpu: e.payload.doc.data()['CPU'],
          os: e.payload.doc.data()['OS'],
          resolucion: e.payload.doc.data()['Resolution'],
          imgURL: e.payload.doc.data()['URL_IMG'],
          qrURL: e.payload.doc.data()['URL_QR'],
          peso: e.payload.doc.data()['Weight'],
          bateria: e.payload.doc.data()['Battery'],
          camara: e.payload.doc.data()['Camera'],
          pantalla: e.payload.doc.data()['Display'],
          ppi: e.payload.doc.data()['PPI'],
          precio: e.payload.doc.data()['Price'],
          ram: e.payload.doc.data()['RAM'],
          dimensiones: e.payload.doc.data()['Dimensions'],
          almacenamiento: e.payload.doc.data()['Storage'],
          id: e.payload.doc.id
        };
      });
      this.bandera=false;
    });
  }

}