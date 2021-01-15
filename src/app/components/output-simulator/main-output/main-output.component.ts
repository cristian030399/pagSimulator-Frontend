import { Component, OnInit } from '@angular/core';
import { PagSimulatorAPIService } from '../../../services/pag-simulator-api.service';

@Component({
  selector: 'app-main-output',
  templateUrl: './main-output.component.html',
  styleUrls: ['./main-output.component.css']
})
export class MainOutputComponent implements OnInit {

  paso = 0;

  resultado: any = JSON.parse("{}");

  resultadoIsEmpty = true;

  constructor(private pagSimulatorAPIService: PagSimulatorAPIService) { }

  ngOnInit(): void {
    this.pagSimulatorAPIService.result$.subscribe(data => {
      this.resultado = data;
      this.resultadoIsEmpty = false;
      this.paso = 0;
    })
  }

  changePaso(paso) {
    this.paso = paso;
    this.pagSimulatorAPIService.step$.emit(this.paso);
  }

}
