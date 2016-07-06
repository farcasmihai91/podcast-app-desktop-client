import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode, provide } from 'angular2/core';
import { MainComponent } from './components/my-component';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS } from 'angular2/router';
import {LocationStrategy} from      'angular2/src/platform/browser/location/location_strategy';
import {HashLocationStrategy} from      'angular2/src/platform/browser/location/hash_location_strategy';


// enableProdMode();
bootstrap(MainComponent, [ROUTER_PROVIDERS, provide(LocationStrategy,
    { useClass: HashLocationStrategy })]);