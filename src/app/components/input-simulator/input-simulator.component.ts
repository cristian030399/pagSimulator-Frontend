import { Component, OnInit } from '@angular/core';
import { PagSimulatorAPIService } from '../../services/pag-simulator-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-simulator',
  templateUrl: './input-simulator.component.html',
  styleUrls: ['./input-simulator.component.css']
})
export class InputSimulatorComponent implements OnInit {

  inputSimulator: any = {
    addresses: "",
    policy: "",
    cachesize: 0,
    numaddrs: 0,
    maxpage: 0
  };

  inputSimulatorFinal: any;

  cadenaRandom = -1;

  cadenaValida = false;

  constructor(private pagSimulatorAPIService: PagSimulatorAPIService) { }

  ngOnInit(): void {
  }

  simular() {
    this.verificarValores();
    this.pagSimulatorAPIService.pagingPolicy(this.inputSimulatorFinal).subscribe(data => {
      this.pagSimulatorAPIService.result$.emit(data)
    });
  }

  verificarValores() {
    if (this.cadenaRandom == 1) {
      this.inputSimulatorFinal = {
        addresses: this.inputSimulator.addresses,
        policy: this.inputSimulator.policy,
        cachesize: this.inputSimulator.cachesize
      }
    } else {
      this.inputSimulatorFinal = {
        addresses: "-1",
        policy: this.inputSimulator.policy,
        numaddrs: "" + this.inputSimulator.numaddrs,
        cachesize: this.inputSimulator.cachesize,
        maxpage: this.inputSimulator.maxpage,
        seed: this.getRandom()
      }
    }
  }

  getRandom() {
    return Math.random() * (100 - (-100)) + (-100);
  }

  valideKey(evt) {
    let code = (evt.which) ? evt.which : evt.keyCode;
    if (code == 8) {
      return true;
    } else if ((code >= 48 && code <= 57) || (code == 44)) {
      return true;
    } else {
      return false;
    }

  }

  validFormat(evt) {
    const pattern = /^(?!(,))+((\d+)(,\d+)+$)/g;
    const inputChar = this.inputSimulator.addresses + evt.key;
    if (!pattern.test(inputChar)) {
      this.cadenaValida = false;
    } else {
      this.cadenaValida = true;
    }
  }

  justNumber(evt) {
    const pattern = /^\d+$/g;
    if (!pattern.test(evt.key)) {
      return false;
    }
    return true;
  }  

}
