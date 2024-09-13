import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoViajePage } from './auto.viaje.page';

describe('AutoViajePage', () => {
  let component: AutoViajePage;
  let fixture: ComponentFixture<AutoViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
