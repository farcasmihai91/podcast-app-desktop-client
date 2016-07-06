import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import { PodcastComponent } from './podcast-component';
import { HomeComponent} from './home-component';
import { LoginComponent} from './login-component';

@Component({
  selector: 'my-app',
  templateUrl: `file://${__dirname}/app/components/my-component.html`,
  directives: [PodcastComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent },
  {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true}
])
export class MainComponent {}