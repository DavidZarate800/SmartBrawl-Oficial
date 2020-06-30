import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})

export class LoggedinComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  datos: celulares[] = [
    { brand: 'Samsung', name: 'Galaxy S20 / S20 Plus', os: 'Android 10', resolution: '3200 x 1440', cpu: 'Snapdragon 865', ruta: '../../assets/celulares/GalaxyS20.jpeg', url: 'https://www.samsung.com/us/mobile/galaxy-s20-5g/' },
    { brand: 'Apple', name: 'iPhone 11', os: 'iOS 13', resolution: '828 x 1792', cpu: 'A13 Bionic', ruta: '../../assets/celulares/Iphone11.jpeg', url: 'https://www.apple.com/iphone-11/' },
    { brand: 'Samsung', name: 'Galaxy Note 10 Plus', os: 'Android 9', resolution: '2280 x 1080', cpu: 'Snapdragon 855', ruta: '../../assets/celulares/GalaxyNote.jpeg', url: 'https://www.samsung.com/mx/smartphones/galaxy-note10/' },
    { brand: 'Apple', name: 'iPhone 11 Pro / 11 Pro Max', os: 'iOS 13', resolution: '1242 x 2688', cpu: 'A13 Bionic', ruta: '../../assets/celulares/Iphone11-Pro.jpeg', url: 'https://www.apple.com/iphone-11/' },
    { brand: 'OnePlus', name: 'OnePlus 8 Pro', os: 'Android 10', resolution: '3168 x 1440', cpu: 'Snapdragon 865', ruta: '../../assets/celulares/OnePlus8Pro.jpeg', url: 'https://www.oneplus.com/8-pro' },
    { brand: 'Apple', name: 'iPhone SE (2020)', os: 'iOS 13', resolution: '1134 x 750', cpu: 'A13 Bionic', ruta: '../../assets/celulares/IphoneSE.jpeg', url: 'https://www.apple.com/iphone-se/' },
    { brand: 'Samsung', name: 'Galaxy S20 Ultra', os: 'Android 10', resolution: '3200 x 1440', cpu: 'Snapdragon 865', ruta: '../../assets/celulares/GalaxyS20Ultra.jpeg', url: 'https://www.samsung.com/us/mobile/galaxy-s20-5g/' },
    { brand: 'Samsung', name: 'Galaxy S10/S10 Plus', os: 'Android Pie', resolution: '3040×1440', cpu: 'Snapdragon 855', ruta: '../../assets/celulares/GalaxyS20.jpeg', url: 'https://www.samsung.com/mx/smartphones/galaxy-s10/' },
    { brand: 'OnePlus', name: 'OnePlus 7 Pro', os: 'Android Pie', resolution: 'Quad HD+', cpu: 'Snapdragon 855', ruta: '../../assets/celulares/OnePlus7Pro.jpeg', url: 'https://www.oneplus.com/global/7pro#/' },
    { brand: 'Google', name: 'Pixel 4 XL', os: 'Android 10', resolution: '1440 x 3040', cpu: 'Snapdragon 855', ruta: '../../assets/celulares/Pixel.jpeg', url: 'https://www.oneplus.com/global/7pro#/' }
  ];

  comparados: celulares[];
  const = 0;

  comparar(nombre: string){
    for (const x of this.datos){
      if (nombre === x.name){
      }
    }
  }
}

export interface celulares{
  brand: string;
  name: string;
  os: string;
  resolution: string;
  cpu: string;
  ruta: string;
  url: string;
}