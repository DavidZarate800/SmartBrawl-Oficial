import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../services/speech.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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