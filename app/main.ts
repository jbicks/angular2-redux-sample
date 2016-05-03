import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app/app.component';
import {provide} from 'angular2/core';
import {createStore} from 'redux';

const appStore = createStore(rootReducer);

bootstrap(AppComponent, [
  provide('AppStore', { useValue: appStore })
])
