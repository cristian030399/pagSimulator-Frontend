import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSimulatorComponent } from './input-simulator.component';

describe('InputSimulatorComponent', () => {
  let component: InputSimulatorComponent;
  let fixture: ComponentFixture<InputSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
