import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputSimulatorComponent } from './components/input-simulator/input-simulator.component';
import { MainOutputComponent } from './components/output-simulator/main-output/main-output.component';
import { ChainPageComponent } from './components/output-simulator/chain-page/chain-page.component';
import { CacheComponent } from './components/output-simulator/cache/cache.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSimulatorComponent,
    MainOutputComponent,
    ChainPageComponent,
    CacheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
