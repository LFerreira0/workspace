import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassObjectsComponent } from './class-objects.component';

describe('ClassObjectsComponent', () => {
  let component: ClassObjectsComponent;
  let fixture: ComponentFixture<ClassObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassObjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
