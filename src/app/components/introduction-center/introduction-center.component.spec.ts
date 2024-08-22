import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionCenterComponent } from './introduction-center.component';

describe('IntroductionCenterComponent', () => {
  let component: IntroductionCenterComponent;
  let fixture: ComponentFixture<IntroductionCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
