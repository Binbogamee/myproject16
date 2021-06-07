import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesLayoutComponent } from './types-layout.component';

describe('TypesLayoutComponent', () => {
  let component: TypesLayoutComponent;
  let fixture: ComponentFixture<TypesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
