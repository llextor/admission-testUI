import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../../entities/user';

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
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      password: '',
      email: '',
    });
  }
  signUp() {
    console.log('REGISTRATION');
    return this.authService.signUP(this.form).subscribe(data => console.log(this.user = data));
  }


}
