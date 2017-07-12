import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AboutSectionComponent } from './about-section.component';

describe('AboutSectionComponent', () => {
  let component: AboutSectionComponent;
  let fixture: ComponentFixture<AboutSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('social media links', () => {
    it('should display github link', () => {
      // Assert
      const github: DebugElement = fixture.debugElement.query(By.css('.cf-github'));
      expect(github.nativeElement.href).toBe('https://github.com/codefiction');
    });

    it('should display facebook link', () => {
      // Assert
      const facebookLink: DebugElement = fixture.debugElement.query(By.css('.cf-facebook'));
      expect(facebookLink.nativeElement.href).toBe('https://fb.me/codefiction');
    });

    it('should display twitter link', () => {
      // Assert
      const twitterLink: DebugElement = fixture.debugElement.query(By.css('.cf-twitter'));
      expect(twitterLink.nativeElement.href).toBe('https://twitter.com/codefictiontech');
    });

    it('should display youtube link', () => {
      // Assert
      const youtubeLink: DebugElement = fixture.debugElement.query(By.css('.cf-youtube'));
      expect(youtubeLink.nativeElement.href).toBe('https://www.youtube.com/codefiction');
    });
  });

  describe('about us message', () => {
    it('should display about message', () => {
      // Assert
      const aboutMessage: DebugElement = fixture.debugElement.query(By.css('.cf-about-text'));
      expect(aboutMessage.nativeElement.textContent).toContain('Bizler Türkiye\'nin çeşitli yerlerinden kopup bu ülkenin ekmeğini yemiş,');
    });
  });
});
