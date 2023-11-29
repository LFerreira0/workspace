import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHomeComponent } from './angular-home.component';

describe('AngularHomeComponent', () => {
  let component: AngularHomeComponent;
  let fixture: ComponentFixture<AngularHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
