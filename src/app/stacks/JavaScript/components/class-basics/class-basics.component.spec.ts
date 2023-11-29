import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBasicsComponent } from './class-basics.component';

describe('ClassBasicsComponent', () => {
  let component: ClassBasicsComponent;
  let fixture: ComponentFixture<ClassBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
