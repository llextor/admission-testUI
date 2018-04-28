import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../../entities/user';
import {Subscription} from 'rxjs/Subscription';
import {Router, RouterModule, Routes, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  user: User = {
    name: '',
    password: ''
  };
  goodRegistration: boolean;
  badLogin: boolean;
  private subscriprion: Subscription;

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private routes: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
    this.subscriprion = this.activeRoute.queryParams.subscribe(params => {
      this.user.name = params['name'];
      this.user.password = params['password'];
      this.goodRegistration = params['goodRegistration'];
      this.badLogin = params['badLogin'];
    });
  }

  signIn() {
    this.auth.signIn(this.form.get('name').value, this.form.get('password').value);
  }
}
