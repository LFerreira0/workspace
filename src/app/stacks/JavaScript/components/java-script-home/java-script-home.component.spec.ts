import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptHomeComponent } from './java-script-home.component';

describe('JavaScriptHomeComponent', () => {
  let component: JavaScriptHomeComponent;
  let fixture: ComponentFixture<JavaScriptHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaScriptHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaScriptHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
