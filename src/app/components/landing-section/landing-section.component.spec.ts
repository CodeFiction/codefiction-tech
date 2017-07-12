import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSectionComponent } from './landing-section.component';

describe('LandingSectionComponent', () => {
  let component: LandingSectionComponent;
  let fixture: ComponentFixture<LandingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
