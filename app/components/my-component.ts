import { Component } from 'angular2/core';
import { PodcastComponent } from './podcast-component';

@Component({
  selector: 'my-app',
  templateUrl: `file://${__dirname}/app/components/my-component.html`,
  directives: [PodcastComponent]
})
export class MainComponent {}