import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassOutputComponent } from './class-output.component';

describe('ClassOutputComponent', () => {
  let component: ClassOutputComponent;
  let fixture: ComponentFixture<ClassOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
