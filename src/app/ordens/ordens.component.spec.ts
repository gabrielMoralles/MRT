import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdensComponent } from './ordens.component';

describe('OrdensComponent', () => {
  let component: OrdensComponent;
  let fixture: ComponentFixture<OrdensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
