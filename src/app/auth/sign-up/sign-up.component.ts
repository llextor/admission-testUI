import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../../entities/user';
import {Observable} from 'rxjs/Observable';
import {error} from 'util';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private routes: Router
  ) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.email
      ]),
    });
  }
  signUp() {
    console.log('REGISTRATION');
    return this.authService.signUp(this.form).subscribe(data => {
      console.log();
      this.routes.navigate(['/signin'],
        {queryParams: {'name': this.form.get('name').value, 'password': this.form.get('password').value, 'successReg': true}});
    }, () => {
      console.log(error);
    });
  }


}
