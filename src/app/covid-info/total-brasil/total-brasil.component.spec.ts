import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBrasilComponent } from './total-brasil.component';

describe('TotalBrasilComponent', () => {
  let component: TotalBrasilComponent;
  let fixture: ComponentFixture<TotalBrasilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalBrasilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalBrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
