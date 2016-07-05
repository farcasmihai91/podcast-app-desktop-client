import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Podcast } from '../podcast';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PodcastService {
  constructor(private http: Http) {

  }

  private podcastApiEndpoint = 'http://localhost:3005/';

  getPodcast(){
    return this.http.get(this.podcastApiEndpoint)
    .map(res => res.json())
    // .do(data => console.log(data))
    .catch(this.errorHandler);
  }
  private errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}