import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from '../../../node_modules/sweetalert';
// verificar usuario
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modal-log-in',
  templateUrl: './modal-log-in.component.html',
  styleUrls: ['./modal-log-in.component.css']
})
export class ModalLogInComponent implements OnInit {
  form: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.authService.loginWithEmail(this.form.value.email, this.form.value.password)
        .then((usr: any) => {
          swal('Successful log in!', 'Welcome to Smart Brawl!', 'success');
        })
        .catch((err: any) => {
          swal('Error!', 'Verify your data...', 'error');
        });
    }
    else {
      swal('Error!', 'Check requirements...', 'error');
    }
  }
}
