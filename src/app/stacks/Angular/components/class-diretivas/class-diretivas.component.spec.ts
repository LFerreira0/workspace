import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDiretivasComponent } from './class-diretivas.component';

describe('ClassDiretivasComponent', () => {
  let component: ClassDiretivasComponent;
  let fixture: ComponentFixture<ClassDiretivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassDiretivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
