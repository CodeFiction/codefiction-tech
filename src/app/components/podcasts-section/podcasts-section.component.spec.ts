import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, ConnectionBackend, Http } from '@angular/http';

import { PodcastsSectionComponent } from './podcasts-section.component';
import { PodcastService } from '../../services';
import { Podcast } from '../../models';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { FormsModule } from '@angular/forms';

describe('PodcastsSectionComponent', () => {
  let component: PodcastsSectionComponent;
  let fixture: ComponentFixture<PodcastsSectionComponent>;
  let podcastService: PodcastService;
  const mockPodcasts: Podcast[] = [
    new Podcast('foo', '22:22:22', 'url-to-go'),
    new Podcast('bar', '22:32:55', 'url-to-go')
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [PodcastsSectionComponent],
      providers: [
        PodcastService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http, useFactory: (backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(PodcastsSectionComponent);
    // Inject to service to spy methods.
    podcastService = fixture.debugElement.injector.get(PodcastService);
    component = fixture.componentInstance;
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('compiled template', () => {

  });

  describe('controller', () => {
    describe('onInit', () => {
      it('should load podcasts', () => {
        // Arrange
        spyOn(podcastService, 'getPodcasts')
          .and.returnValue(Observable.of(mockPodcasts));

        // Act
        fixture.detectChanges();

        // Assert
        expect(component.podcasts).toBeTruthy();
        expect(component.podcasts.length).toBe(mockPodcasts.length);
      });
    });

    describe('ngOnDestroy', (): void => {
      it('should unsubscribe from the observable', (): void => {
        // Arrange
        spyOn(podcastService, 'getPodcasts')
          .and.returnValue(Observable.of(mockPodcasts));
        component.ngOnInit();
        spyOn(component.podcastFeedSubscription, 'unsubscribe');

        // Act
        component.ngOnDestroy();

        // Assert
        expect(component.podcastFeedSubscription.unsubscribe).toHaveBeenCalled();
      });
    });
  });
});
