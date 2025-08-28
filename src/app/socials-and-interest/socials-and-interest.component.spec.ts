import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsAndInterestComponent } from './socials-and-interest.component';

describe('SocialsAndInterestComponent', () => {
  let component: SocialsAndInterestComponent;
  let fixture: ComponentFixture<SocialsAndInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialsAndInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsAndInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
