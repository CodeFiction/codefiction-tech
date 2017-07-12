import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Podcast } from '../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class PodcastService {
  constructor(private http: Http) { }

  public getPodcasts(endpointUri: string): Observable<Podcast[]> {
    if (!endpointUri) {
      throw new Error('You must specify the endpoint.');
    }

    return this.http.get(endpointUri).map(this.extractData);
  }

  private extractData(res: Response): Podcast[] {
    const body: any = res.json();
    if (!body) {
      throw new Error('Response cannot be empty!');
    }

    return body;
  }

}
