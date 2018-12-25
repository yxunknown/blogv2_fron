import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubAuthPageComponent } from './github-auth-page.component';

describe('GithubAuthPageComponent', () => {
  let component: GithubAuthPageComponent;
  let fixture: ComponentFixture<GithubAuthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubAuthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubAuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
