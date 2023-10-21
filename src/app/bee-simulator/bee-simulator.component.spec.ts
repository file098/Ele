import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeSimulatorComponent } from './bee-simulator.component';

describe('BeeSimulatorComponent', () => {
  let component: BeeSimulatorComponent;
  let fixture: ComponentFixture<BeeSimulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeeSimulatorComponent]
    });
    fixture = TestBed.createComponent(BeeSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
