import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCliComponent } from './class-cli.component';

describe('ClassCliComponent', () => {
  let component: ClassCliComponent;
  let fixture: ComponentFixture<ClassCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
