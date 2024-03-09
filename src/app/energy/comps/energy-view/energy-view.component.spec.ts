import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyViewComponent } from './energy-view.component';

describe('EnergyViewComponent', () => {
  let component: EnergyViewComponent;
  let fixture: ComponentFixture<EnergyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnergyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
