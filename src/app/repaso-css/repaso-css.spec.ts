import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasoCSS } from './repaso-css';

describe('RepasoCSS', () => {
  let component: RepasoCSS;
  let fixture: ComponentFixture<RepasoCSS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepasoCSS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepasoCSS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
