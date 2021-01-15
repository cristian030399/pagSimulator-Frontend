import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOutputComponent } from './main-output.component';

describe('MainOutputComponent', () => {
  let component: MainOutputComponent;
  let fixture: ComponentFixture<MainOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
