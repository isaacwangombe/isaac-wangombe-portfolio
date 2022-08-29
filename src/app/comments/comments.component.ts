import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
  NgForm,
} from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from '../api/projects';
import { flipInX, slideInRight } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  animations: [
    trigger('slideInRight', [transition('* => *', useAnimation(slideInRight))]),
  ],
})
export class CommentsComponent implements OnInit {
  data = [];
  alert: boolean = false;
  url = environment.allComments;
  id = '';
  project: Projects;
  project1: Projects;
  slideInRight: any;
  byId: Projects;

  // cloudinary
  cloud: string = environment.cloudinary;

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    comment: new FormControl('', Validators.required),
    design_rating: new FormControl(0, Validators.required),
    user_rating: new FormControl(0, Validators.required),
    content_rating: new FormControl(0, Validators.required),
    project: new FormControl('', Validators.required),
  });

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.myForm.patchValue({
      project: this.id,
    });
    this.projectsById();
  }

  getText(data: any) {
    if (this.myForm.valid) {
      this.myForm.reset();
      this.alert = true;
    }
    this.http
      .post(this.url, data)
      .toPromise()
      .then((data) => {});
    console.log(data);
  }

  ctrl = new FormControl<number | null>(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  projectsById() {
    this.id = this.route.snapshot.params.id;

    this.http
      .get<any>(environment.projectsById + this.id)
      .subscribe((response) => {
        this.byId = response;
      });
    console.log(environment.projectsById + this.id);
  }
}
