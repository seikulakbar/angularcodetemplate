import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGenarateTemplateComponent } from './code-genarate-template.component';

describe('CodeGenarateTemplateComponent', () => {
  let component: CodeGenarateTemplateComponent;
  let fixture: ComponentFixture<CodeGenarateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeGenarateTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGenarateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
