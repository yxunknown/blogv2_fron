import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCollectionsComponent } from './type-collections.component';

describe('TypeCollectionsComponent', () => {
  let component: TypeCollectionsComponent;
  let fixture: ComponentFixture<TypeCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
