import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../services/speech.service'

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  panelOpenState = false;
  constructor(private lectura: SpeechService) { }

  ngOnInit(): void {
  }

  //Metodos de Speech
  start(html){
    this.lectura.start(html); 
  }
  pause(){
    this.lectura.pause();
  }
  resume(){
    this.lectura.resume();
  }
  //Fin metodos Speech
  cancel(){
    this.lectura.cancel();
  }

}
