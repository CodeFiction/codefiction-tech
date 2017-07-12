import { async, inject, TestBed } from '@angular/core/testing';
import {
  BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions
} from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { Podcast } from '../models';
import { PodcastService } from './podcast.service';

describe('PodcastService', () => {
  let mockBackend: MockBackend;
  let service: PodcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http, useFactory:
          (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        PodcastService,
        BaseRequestOptions,
        MockBackend
      ]
    });
  });

  beforeEach(inject(
    [MockBackend, PodcastService],
    (_mockBackend_: MockBackend, _service_: PodcastService) => {
      mockBackend = _mockBackend_;
      service = _service_;
    }));

  describe('getPodcasts', () => {
    it('should throw error if endpointUri is falsy', (): void => {
      // Act + Assert
      expect(
        (): Observable<Podcast[]> => service.getPodcasts(undefined)
      ).toThrow(new Error('You must specify the endpoint.'));
    });

    it('returns podcast array', async((): void => {
      // Arrange
      const mockPodcasts: Podcast[] = [
        new Podcast('foo', '22:22:22', 'url-to-go'),
        new Podcast('bar', '22:32:55', 'url-to-go')
      ];

      mockBackend.connections
        .subscribe((connection: MockConnection) => {
          const responseOpts: ResponseOptions = new ResponseOptions({
            body: JSON.stringify(mockPodcasts)
          });
          connection.mockRespond(new Response(responseOpts));
        });

      // Act + Assert
      service.getPodcasts('url-to-podcast-feed')
        .subscribe((data: any) => {
          expect(JSON.stringify(data))
            .toEqual(JSON.stringify(mockPodcasts));
        });
    }));

    it('should throw error when response body is falsy', async((): void => {
      // Arrange
      mockBackend.connections
        .subscribe((connection: MockConnection) => {
          const responseOpts: ResponseOptions = new ResponseOptions({
            body: JSON.stringify(null)
          });
          connection.mockRespond(new Response(responseOpts));
        });

      // Act + Assert
      expect(service.getPodcasts.bind('url-to-podcast-feed')).toThrow();
    }));
  });
});
