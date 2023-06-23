import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTemplateComponent } from './class-template.component';

describe('ClassTemplateComponent', () => {
  let component: ClassTemplateComponent;
  let fixture: ComponentFixture<ClassTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
