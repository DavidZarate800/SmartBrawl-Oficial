import { Injectable } from '@angular/core';
import  Speech  from 'speak-tts';

@Injectable({
  providedIn: 'root'
})

export class SpeechService {

  speech: any;
  speechData: any;
  result: any;
  html: any;
  ax: boolean = false;

  constructor() {
    this.speech = new Speech(); //Instanciamos o inyectamos
    if(this.speech.hasBrowserSupport()) {
        console.log("Speech synthesis suported")
        this.speech.init({
                'volume': 1,
                'lang': 'es-MX',
                'rate': 1,
                'pitch': 1,
                // 'voice':'Google UK English Male',
                'splitSentences': true,
                'listeners': {
                    'onvoiceschanged': (voices) => {
                        console.log("Cambio de voces", voices)
                    }
                }
        }).then( (data) => {
            console.log("Speech is ready, voices are available", data);
            this.speechData = data;
            console.log(this.speechData);
            data.voices.forEach(voice => {
              console.log(voice.name + " "+ voice.lang)
            });
        }).catch( e => {
            console.error("An error occured while initializing : ", e)
        })        
    }
  }

  start(text: string){
    this.speech.cancel();
    this.result = text;
    console.log(this.result);
    this.speech.speak({
        text: this.result,
    }).then(() => {
        console.log("El texto se pudo leer")
    }).catch(e => {
        console.error("An error occurred :", e) 
    })
  }

  pause(){
    this.speech.pause();
  }

  resume(){
    this.speech.resume();
  }

  cancel(){
    this.speech.cancel();
  }
  
  setLanguage(i){
    console.log(i);
    console.log(this.speechData.voices[i].lang + this.speechData.voices[i].name);
    this.speech.setLanguage(this.speechData.voices[i].lang);
    this.speech.setVoice(this.speechData.voices[i].name);
  }

  getSpeechData(){
    console.log(this.speechData);
    return this.speechData;
  }

  setVolume(v){
    this.speech.setVolume(v);
  }

  getVolume(){
    console.log(this.speech.volume);
    return this.speech.volume;
  }

  prueba(){
    console.log(this.speechData);
  }
  
}
