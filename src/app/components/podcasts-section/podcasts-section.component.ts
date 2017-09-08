import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Podcast } from '../../models';
import { PodcastService } from '../../services';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cf-podcasts-section',
  templateUrl: './podcasts-section.component.html',
  styleUrls: ['./podcasts-section.component.scss']
})
export class PodcastsSectionComponent implements OnInit, OnDestroy {
  @Input() public podcastFeed: string;
  public podcasts: Podcast[];
  public keyword: string;
  public podcastFeedSubscription: Subscription;

  // prod
  private feedUri: string = 'https://djvlwqlqta.execute-api.eu-west-1.amazonaws.com/Prod/';
  private searchUri: string = 'https://djvlwqlqta.execute-api.eu-west-1.amazonaws.com/Prod/search?keyword=';

  constructor(private feedService: PodcastService) {
  }

  public ngOnInit() {
    this.loadPodcastResult(this.feedUri);
  }

  public search(keyword: string): void {
    this.loadPodcastResult(this.searchUri + keyword);
  }

  private loadPodcastResult(uri: string): void {
    const podcast$: Observable<Podcast[]> = this.feedService.getPodcasts(uri);
    this.podcastFeedSubscription = podcast$.subscribe(
      (podcasts: Podcast[]) => this.podcasts = podcasts
    );
  }

  public ngOnDestroy() {
    if (this.podcastFeedSubscription) {
      this.podcastFeedSubscription.unsubscribe();
    }
  }
}
