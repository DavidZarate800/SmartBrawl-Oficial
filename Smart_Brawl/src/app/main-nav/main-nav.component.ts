import { ModalLogInComponent } from './../modal-log-in/modal-log-in.component';
import { ModalComponent } from './../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { NodejsService } from '../services/nodejs.service';
import swal from '../../../node_modules/sweetalert';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  nomcorreo: string;
  mensaje: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private nodejs: NodejsService,
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private authService: AuthService
  ) { }

  enviar(): void {
    const urlapi = `http://localhost:5001/nodeapi-9b54e/us-central1/widgets/api`;
     console.log(urlapi);
    this.nodejs.getJson(urlapi).subscribe((data: any) => {
      this.mensaje = data;
      console.log(this.mensaje);
    });
  }


  openDialog() {
    this.dialog.open(ModalComponent);
  }

  openDialogLogIn() {
    this.dialog.open(ModalLogInComponent);
  }

  salir() {
    swal({
      title: 'Logout',
      text: 'Are you sure you wanna logout?',
      icon: 'warning',
      buttons: [true,true],
      dangerMode: true,
    })
    .then((logOut) => {
      if (logOut) {
        this.authService.singout();
      }
    });
  }

  logueado() {
    if (this.authService.currentUser) {
      this.nomcorreo = this.authService.currentUser.email;
      return true;
    }
  }

  nologueado() {
    if (!this.authService.currentUser) {
      return true;
    }
  }

  recuperarAdmin() {
    if (this.authService.currentUser) {
      if (this.authService.currentUser.email === 'admin@admin.com') {
        return true;
      }
    }
  }






}
