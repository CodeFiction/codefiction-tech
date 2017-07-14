import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('compiled template', () => {
    it('should display menu bar', () => {
      // Act
      fixture.detectChanges();

      // Assert
      const menu: DebugElement = fixture.debugElement.query(
        By.css('cf-menu-bar')
      );
      expect(menu).toBeTruthy();
    });

    it('should display landing section', () => {
      // Act
      fixture.detectChanges();

      // Assert
      const landing: DebugElement = fixture.debugElement.query(
        By.css('cf-landing-section')
      );
      expect(landing).toBeTruthy();
    });

    it('should display podcasts section', () => {
      // Act
      fixture.detectChanges();

      // Assert
      const podcasts: DebugElement = fixture.debugElement.query(
        By.css('cf-podcasts-section')
      );
      expect(podcasts).toBeTruthy();
    });

    it('should display about section', () => {
      // Act
      fixture.detectChanges();

      // Assert
      const about: DebugElement = fixture.debugElement.query(
        By.css('cf-about-section')
      );
      expect(about).toBeTruthy();
    });

    it('should display page footer', () => {
      // Act
      fixture.detectChanges();

      // Assert
      const footer: DebugElement = fixture.debugElement.query(
        By.css('cf-page-footer')
      );
      expect(footer).toBeTruthy();
    });

  });
});
