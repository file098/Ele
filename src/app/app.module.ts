import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BeeSimulatorComponent } from './bee-simulator/bee-simulator.component';

@NgModule({
  declarations: [
    AppComponent,
    BeeSimulatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
