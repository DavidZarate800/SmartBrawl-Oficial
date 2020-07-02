import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from '../../../node_modules/sweetalert';
// registrar uuario
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  form: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordR: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
  }

  submit() {
    if (!this.form.valid){
      swal('Error!', 'Check requirements...', 'error');
    }
    else if (this.form.value.password === this.form.value.passwordR) {
      this.authService.registerWithEmail(this.form.value.email, this.form.value.password)
        .then((usr: any) => {
          swal('Account registered!', 'Welcome to Smart Brawl!', 'success');
        })
        .catch((err: any) => {
          swal('Error!', 'Account already registered...', 'error');
        });
    }
    else {
      swal('Error!', 'Passwords must match.', 'error');
    }
  }
}
