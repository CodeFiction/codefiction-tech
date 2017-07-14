import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PageFooterComponent } from './page-footer.component';

describe('PageFooterComponent', () => {
  let component: PageFooterComponent;
  let fixture: ComponentFixture<PageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFooterComponent);
    component = fixture.componentInstance;
  });

  it('should set the copyright year the year we are in', () => {
    // Act
    fixture.detectChanges();

    // Assert
    expect(component.copyrightYear).toBe(new Date().getFullYear());
  });

  describe('compiled template', () => {
    it('should display the correct copyright year', () => {
      // Act
      fixture.detectChanges();

      // Assert
      const copyright: DebugElement = fixture.debugElement.query(By.css('.cf-copyright-year'));
      expect(copyright.nativeElement.textContent).toBe(component.copyrightYear.toString());
    });
  });
});
