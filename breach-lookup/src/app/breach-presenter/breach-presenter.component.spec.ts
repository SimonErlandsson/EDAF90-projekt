import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreachPresenterComponent } from './breach-presenter.component';

describe('BreachPresenterComponent', () => {
  let component: BreachPresenterComponent;
  let fixture: ComponentFixture<BreachPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreachPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreachPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
