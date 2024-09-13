import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoAutoViajePage } from './no-auto.viaje.page';

describe('NoAutoViajePage', () => {
  let component: NoAutoViajePage;
  let fixture: ComponentFixture<NoAutoViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAutoViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
