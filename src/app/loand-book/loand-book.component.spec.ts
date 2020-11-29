import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandBookComponent } from './loand-book.component';

describe('LoandBookComponent', () => {
  let component: LoandBookComponent;
  let fixture: ComponentFixture<LoandBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoandBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoandBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
