import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from "./app.component";
import {
  WavesModule,
  TableModule,
  ButtonsModule,
  CollapseModule
} from "angular-bootstrap-md";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WavesModule,
    TableModule,
    ButtonsModule,
    MatButtonModule, 
    MatCheckboxModule,
    CollapseModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
