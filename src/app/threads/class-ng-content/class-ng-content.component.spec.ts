import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassNgContentComponent } from './class-ng-content.component';

describe('ClassNgContentComponent', () => {
  let component: ClassNgContentComponent;
  let fixture: ComponentFixture<ClassNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassNgContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
