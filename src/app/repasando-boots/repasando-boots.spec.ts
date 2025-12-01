import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasandoBoots } from './repasando-boots';

describe('RepasandoBoots', () => {
  let component: RepasandoBoots;
  let fixture: ComponentFixture<RepasandoBoots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepasandoBoots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepasandoBoots);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
