import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
})
export class CacheComponent implements OnInit {

  @Input() cache = [];
  @Input() cacheSize = 0;
  @Input() victima = "";

  constructor() { }

  ngOnInit(): void {
  }

  cacheMemori(i) {
    return new Array(i);;
  }

}
