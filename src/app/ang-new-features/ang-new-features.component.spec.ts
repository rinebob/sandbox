import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngNewFeaturesComponent } from './ang-new-features.component';

describe('AngNewFeaturesComponent', () => {
  let component: AngNewFeaturesComponent;
  let fixture: ComponentFixture<AngNewFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngNewFeaturesComponent]
    });
    fixture = TestBed.createComponent(AngNewFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
