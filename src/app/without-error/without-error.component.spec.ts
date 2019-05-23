import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutErrorComponent } from './without-error.component';

describe('WithoutErrorComponent', () => {
  let component: WithoutErrorComponent;
  let fixture: ComponentFixture<WithoutErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
