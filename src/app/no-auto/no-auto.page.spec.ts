import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoAutoPage } from './no-auto.page';

describe('NoAutoPage', () => {
  let component: NoAutoPage;
  let fixture: ComponentFixture<NoAutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
