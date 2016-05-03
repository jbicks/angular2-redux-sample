import {Component, Inject, OnDestroy} from 'angular2/core';
import {Store} from 'redux';

@Component({
    selector: 'app',
    templateUrl: 'app/app/app.template.html',
    styles: [`
      div {
        width: 100%;
        border-bottom: 1px solid #999;
        padding: 20px;
        float: left;
      }
      `]
})
export class AppComponent {

    // constructor(private appStore: Store) {
    //
    // }
}
