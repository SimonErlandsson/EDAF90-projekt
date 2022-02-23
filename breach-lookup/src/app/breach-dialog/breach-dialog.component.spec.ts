import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreachDialogComponent } from './breach-dialog.component';

describe('BreachDialogComponent', () => {
  let component: BreachDialogComponent;
  let fixture: ComponentFixture<BreachDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreachDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreachDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
