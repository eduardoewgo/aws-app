import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() title: string;
  @Input() object: object;
  @Input() submit: (obj) => void;
  @Input() callback: () => void;

  properties = [];

  constructor(navParams: NavParams) {
    this.object = navParams.get('object');
    this.submit = navParams.get('submit');
    this.callback = navParams.get('callback');
    this.title = navParams.get('title');

    this.properties = Object.keys(this.object);
  }

  ngOnInit() {
  }

}
