import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionBlockComponent } from './detection-block.component';

describe('DetectionBlockComponent', () => {
  let component: DetectionBlockComponent;
  let fixture: ComponentFixture<DetectionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectionBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
