import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PagSimulatorAPIService } from 'src/app/services/pag-simulator-api.service';

@Component({
  selector: 'app-chain-page',
  templateUrl: './chain-page.component.html',
  styleUrls: ['./chain-page.component.css']
})
export class ChainPageComponent implements OnInit, OnDestroy {

  paso = 0;
  pasoSuscription: Subscription;
  @Input() elemento: any = {
  };

  constructor(private pagSimulatorAPIService: PagSimulatorAPIService) { }  

  ngOnInit(): void {
    console.log(this.elemento);
    this.pasoSuscription = this.pagSimulatorAPIService.step$.subscribe(step => this.paso = step);
  }

  ngOnDestroy(): void {
    this.pasoSuscription.unsubscribe();
  }

}
