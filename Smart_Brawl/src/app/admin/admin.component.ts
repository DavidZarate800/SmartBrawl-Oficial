import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  celForm = new FormGroup({

    marca : new FormControl(''),
    modelo : new FormControl(''),
    cpu : new FormControl(''),
    os : new FormControl(''),
    resolucion : new FormControl('')
  
  });

  constructor() { }

  ngOnInit(): void {
  }

  anadir() {
    console.log (this.celForm.value);
    console.log('enviado!');
  }
  
  modificar() {
    console.log (this.celForm.value);
    console.log('enviado!');
  }
  
}