import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithErrorComponent } from './with-error.component';

describe('WithErrorComponent', () => {
  let component: WithErrorComponent;
  let fixture: ComponentFixture<WithErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
