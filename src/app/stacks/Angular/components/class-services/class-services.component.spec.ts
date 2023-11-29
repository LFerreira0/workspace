import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassServicesComponent } from './class-services.component';

describe('ClassServicesComponent', () => {
  let component: ClassServicesComponent;
  let fixture: ComponentFixture<ClassServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
