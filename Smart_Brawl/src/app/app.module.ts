import { MessageService } from './services/message.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalLogInComponent } from './modal-log-in/modal-log-in.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
//firebase modules
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { LoggedinComponent } from './loggedin/loggedin.component';
import { AdminComponent } from './admin/admin.component';
import { NodejsService } from "./services/nodejs.service";

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { LoadingComponent } from './loading/loading.component';

import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FaqsComponent,
    NavbarComponent,
    FooterComponent,
    MainNavComponent,
    ModalComponent,
    ModalLogInComponent,
    LoggedinComponent,
    AdminComponent,
    LoadingComponent
  ],
  entryComponents: [
    ModalComponent,
    ModalLogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgxQRCodeModule,
    ChartsModule

  ],
  providers: [MessageService, NodejsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
