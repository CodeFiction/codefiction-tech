import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MenuBarComponent } from './menu-bar.component';

describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('menu items', () => {
    it('should display podcast link', () => {
      // Assert
      const podcastLink: DebugElement = fixture.debugElement.query(By.css('.cf-podcast'));
      expect(podcastLink.nativeElement.href).toContain('#podcast');
    });

    it('should display about link', () => {
      // Assert
      const aboutLink: DebugElement = fixture.debugElement.query(By.css('.cf-about'));
      expect(aboutLink.nativeElement.href).toContain('#about');
    });
  });

  describe('social network items', () => {
    it('should display patreon button', () => {
      // Assert
      const podcastLink: DebugElement = fixture.debugElement.query(By.css('.cf-btn--patreon'));
      expect(podcastLink.nativeElement.href).toBe('https://www.patreon.com/codefiction');
    });

    it('should display soundcloud button', () => {
      // Assert
      const soundcloudLink: DebugElement = fixture.debugElement.query(By.css('.cf-btn--soundcloud'));
      expect(soundcloudLink.nativeElement.href).toBe('https://soundcloud.com/codefiction');
    });

    it('should display soundcloud RSS button', () => {
      // Assert
      const soundcloudLink: DebugElement = fixture.debugElement.query(By.css('.cf-btn--soundcloud-rss'));
      expect(soundcloudLink.nativeElement.href).toBe('http://feeds.soundcloud.com/users/soundcloud:users:264614350/sounds.rss');
    });

    it('should display gitter button', () => {
      // Assert
      const gitterLink: DebugElement = fixture.debugElement.query(By.css('.cf-btn--gitter'));
      expect(gitterLink.nativeElement.href).toBe('https://gitter.im/codefiction/Lobby');
    });
  });
});
