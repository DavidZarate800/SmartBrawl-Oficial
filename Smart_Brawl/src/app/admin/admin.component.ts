import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from '../../../node_modules/sweetalert';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  celForm1: any;
  celForm2: any;

  constructor(private formBuilder: FormBuilder) {
    // Form validation
    this.celForm1 = formBuilder.group({
      marca: ['', Validators.required],
      nombre: ['', Validators.required],
      cpu: ['', Validators.required],
      os: ['', Validators.required],
      resolucion: ['', Validators.required],
    });

    this.celForm2 = formBuilder.group({
      celModif: ['', Validators.required],
      marca: ['', Validators.required],
      nombre: ['', Validators.required],
      cpu: ['', Validators.required],
      os: ['', Validators.required],
      resolucion: ['', Validators.required],
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
      swal('Done!', 'New cellphone added.', 'success');
      // Aqui se añade el teléfono nuevo a la BD
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
        buttons: true,
        dangerMode: true,
      })
      .then((change) => {
        if (change) {
          swal('Done!', 'Changes applied.', 'success');
          console.log(this.celForm2.value);
          // Aqui se mandan los datos modificados a la BD
        }
      });
    }
  }
}
