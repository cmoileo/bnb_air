import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IProperty } from './property';

describe('Property', () => {
  let component: IProperty;
  let fixture: ComponentFixture<IProperty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IProperty],
    }).compileComponents();

    fixture = TestBed.createComponent(IProperty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
