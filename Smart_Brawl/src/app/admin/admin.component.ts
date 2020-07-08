import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from '../../../node_modules/sweetalert';
import { NodejsService } from '../services/nodejs.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  celForm1: any;
  celForm2: any;
  celForm3: any;
  cellphone: any;
  bandera: boolean;
  cellected: any = {
    marca: '',
    nombre: '',
    cpu: '',
    os: '',
    resolucion: '',
    imgURL: '',
    qrURL: '',
    peso: '',
    bateria: '',
    camara: '',
    dimensiones: '',
    pantalla: '',
    ppi: '',
    precio: '',
    ram: '',
    almacenamiento: '',
    id: ''
  };

  constructor(private formBuilder: FormBuilder, private nodejs: NodejsService) {
    // Form validation


    this.celForm1 = formBuilder.group({
      marca: ['', Validators.required],
      nombre: ['', Validators.required],
      cpu: ['', Validators.required],
      qrURL: ['', Validators.required],
      os: ['', Validators.required],
      resolucion: ['', Validators.required],
      imgURL: ['', Validators.required],
      weight: ['', Validators.required],
      battery: ['', Validators.required],
      camera: ['', Validators.required],
      dimensions: ['', Validators.required],
      display: ['', Validators.required],
      ppi: ['', Validators.required],
      price: ['', Validators.required],
      ram: ['', Validators.required],
      storage: ['', Validators.required]

    });

    this.celForm2 = formBuilder.group({
      celModif: [''],
      marca: ['', Validators.required],
      nombre: ['', Validators.required],
      cpu: ['', Validators.required],
      qrURL: ['', Validators.required],
      os: ['', Validators.required],
      resolucion: ['', Validators.required],
      imgURL: ['', Validators.required],
      weight: ['', Validators.required],
      battery: ['', Validators.required],
      camera: ['', Validators.required],
      dimensions: ['', Validators.required],
      display: ['', Validators.required],
      ppi: ['', Validators.required],
      price: ['', Validators.required],
      ram: ['', Validators.required],
      storage: ['', Validators.required]
    });

    this.celForm3 = formBuilder.group({
      celModif: [''],
      marca: [''],
      nombre: [''],
      cpu: [''],
      qrURL: [''],
      os: [''],
      resolucion: [''],
      imgURL: [''],
      weight: [''],
      battery: [''],
      camera: [''],
      dimensions: [''],
      display: [''],
      ppi: [''],
      price: [''],
      ram: [''],
      storage: ['']
    });
  }

  ngOnInit(): void {
  }

  anadir() {
    if (!this.celForm1.valid) {
      swal('Error!', 'Verify required data...', 'error');
    }
    else {

      console.log(this.celForm1.value);
      this.nodejs.addPhone(this.celForm1.value).subscribe(() => {
        swal('Success!', 'New cellphone added', 'success');
      });
      this.celForm1.reset();
    }
  }

  desplegar() {
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
      console.log(this.cellphone);
      this.bandera=false;
    });
  }



  recuperar(cell: any) {
    this.cellected = cell;
    console.log('cell:', cell);
    console.log('cellected', this.cellected);
  }


  eliminar() {
    if (this.cellected.id == '') {
      swal('Error!', 'Select a cellphone...', 'error');
    } else {
      swal({
        title: 'Wait!',
        text: 'Are you sure you wanna delete this cellphone?',
        icon: 'warning',
        buttons: [true, true],
        dangerMode: true,
      })
        .then((change) => {
          if (change) {
            this.nodejs.deletePhone(this.cellected.id).subscribe(() => {
              swal('Success!', 'Cellphone removed', 'success');
            });
            this.celForm3.reset();
            this.cellected.nombre = '';
          }
        });
    }
  }


  modificar() {
    if (!this.celForm2.valid) {
      swal('Error!', 'Verify required data...', 'error');
    }
    else {
      swal({
        title: 'Wait!',
        text: 'Are you sure you wanna submit changes?',
        icon: 'warning',
        buttons: [true, true],
        dangerMode: true,
      })
        .then((change) => {
          if (change) {
            // Aqui se mandan los datos modificados a la BD
            console.log(this.celForm2.value);
            this.nodejs.setPhone(this.celForm2.value, this.cellected.id).subscribe(() => {
              swal('Success!', 'Cellphone modified', 'success');
            });
            this.celForm2.reset();
            this.cellected.nombre = '';
          }
        });
    }
  }
}
