import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateOrderComponent } from './employee-update-order.component';

describe('EmployeeUpdateOrderComponent', () => {
  let component: EmployeeUpdateOrderComponent;
  let fixture: ComponentFixture<EmployeeUpdateOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUpdateOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
