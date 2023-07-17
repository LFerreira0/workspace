import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassInputComponent } from './class-input.component';

describe('ClassInputComponent', () => {
  let component: ClassInputComponent;
  let fixture: ComponentFixture<ClassInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
