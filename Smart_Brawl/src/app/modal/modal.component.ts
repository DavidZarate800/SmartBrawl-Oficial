import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from '../../../node_modules/sweetalert';
//registrar uuario
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  form: any;

  constructor(private formBuilder: FormBuilder, private authService:AuthService) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordR: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  submit() {
    if (!this.form.valid){
      swal('Error!', 'Verify your data...', 'error');
    }
    else if (this.form.value.password === this.form.value.passwordR) {
      console.log(this.form.value);
      // Los valores están dentro de this.form.value
      // Por ejemplo: this.form.value.password
      this.authService.registerWithEmail(this.form.value.email,this.form.value.password);
      swal('Account registered!', 'Welcome to Smart Brawl!', 'success');
    }
    else {
      swal('Error!', 'Passwords must match.', 'error');
    }
  }
}
