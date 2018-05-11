import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthService} from './auth/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AlertComponent } from './auth/alert/alert.component';
import { PreTestComponent } from './pre-test/pre-test.component';
import { CategoryComponent } from './category/category.component';
import { QuestionComponent } from './question/question.component';
import {QuestionsService} from './question/questions.service';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import {CategoryService} from './category/category.service';
import {EditQuestionService} from './edit-question/edit-question.service';
import { PropitiesComponent } from './propities/propities.component';
import { ChangeQuestionComponent } from './change-question/change-question.component';
import {ChangeQuestionService} from './change-question/change-question.service';
import { TestComponent } from './test/test.component';
import {TestService} from './test/test.service';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    AboutComponent,
    ContactsComponent,
    PageNotFoundComponent,
    AlertComponent,
    PreTestComponent,
    CategoryComponent,
    QuestionComponent,
    EditQuestionComponent,
    PropitiesComponent,
    ChangeQuestionComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    QuestionsService,
    CategoryService,
    EditQuestionService,
    ChangeQuestionService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
