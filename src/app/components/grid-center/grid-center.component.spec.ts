import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCenterComponent } from './grid-center.component';

describe('GridCenterComponent', () => {
  let component: GridCenterComponent;
  let fixture: ComponentFixture<GridCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
