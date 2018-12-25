import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilsComponent } from './evils.component';

describe('EvilsComponent', () => {
  let component: EvilsComponent;
  let fixture: ComponentFixture<EvilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
