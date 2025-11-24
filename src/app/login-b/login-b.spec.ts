import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginB } from './login-b';

describe('LoginB', () => {
  let component: LoginB;
  let fixture: ComponentFixture<LoginB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
