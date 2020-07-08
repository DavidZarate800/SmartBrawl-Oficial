import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from '../../../node_modules/sweetalert';
import { SpeechService } from '../services/speech.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: any;
  bandera: boolean;
  calificacion: string;
  tipo: string;
  constructor(private formBuilder: FormBuilder, public messageService: MessageService, private lectura: SpeechService) {
    // Form validation
    this.form = formBuilder.group({
      username: ['', Validators.required],
      reason: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      rate: ['', Validators.required],
      agree: ['', Validators.requiredTrue]
    });

  }

  ngOnInit(): void {
  }

  // Metodos de Speech
  start(html) {
    this.lectura.start(html);
  }
  pause() {
    this.lectura.pause();
  }
  resume() {
    this.lectura.resume();
  }

  cancel() {
    this.lectura.cancel();
  }
  // Fin metodos Speech

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 10000);
    }

    return value;
  }

  submit() {
    this.bandera = true;
   this.form.value['rate'] = this.form.value['rate']/10000;

    if (!this.form.valid) {
      swal('Error!', 'Verify required data...', 'error');
    }
    else {
      //console.log(this.form.value);
      this.messageService.sendMessage(this.form.value).subscribe(() => {
        this.bandera = false;
        swal('Message sent!', 'We will aswer you.', 'success');
      });
      //Se envía la calificación a la BD Calificaciones
      this.messageService.sendCalif(this.form.value).subscribe(() => { });
    }

  }
}
