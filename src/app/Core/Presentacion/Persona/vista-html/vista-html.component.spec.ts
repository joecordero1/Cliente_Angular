import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaHTMLComponent } from './vista-html.component';

describe('VistaHTMLComponent', () => {
  let component: VistaHTMLComponent;
  let fixture: ComponentFixture<VistaHTMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaHTMLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
