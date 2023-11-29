import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDomComponent } from './class-dom.component';

describe('ClassDomComponent', () => {
  let component: ClassDomComponent;
  let fixture: ComponentFixture<ClassDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassDomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
