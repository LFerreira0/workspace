import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLifeCycleComponent } from './class-life-cycle.component';

describe('ClassLifeCycleComponent', () => {
  let component: ClassLifeCycleComponent;
  let fixture: ComponentFixture<ClassLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassLifeCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
