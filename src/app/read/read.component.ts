import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import * as TutorialActions from '../action/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
   
  tutorials: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
  }

  delTutorial(index) {
    console.log("delete tutorial");
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

}