import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Podcast } from '../podcast';
import { PodcastService } from '../services/podcast.service';

@Component({
  selector: 'my-podcast',
  templateUrl: `file://${__dirname}/app/components/podcast.html`,
  providers: [HTTP_PROVIDERS, PodcastService]
})
export class PodcastComponent implements OnInit {
  errorMessage: string;
  podcasts: any[];
  selectedId: string;
  podLink: string;
  display: string;


  constructor(private _podcastService: PodcastService) { }

  podSelect(podcast: string) {
    this.selectedId = podcast;
    this.podLink = `${this.podcasts[0].link}`
  }

  ngOnInit() {
    this.getPodcasts();
  }

  getPodcasts() {
    this._podcastService.getPodcast()
      .subscribe(
      podcasts => this.podcasts = podcasts,
      error => this.errorMessage = <any>Error
      );
  }

  goBack() {
    this.podLink = null;
  }
}