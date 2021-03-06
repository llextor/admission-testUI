import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PreTestComponent} from './pre-test/pre-test.component';
import {CategoryComponent} from './category/category.component';
import {QuestionComponent} from './question/question.component';
import {EditQuestionComponent} from './edit-question/edit-question.component';
import {ChangeQuestionComponent} from './change-question/change-question.component';
import {TestComponent} from './test/test.component';
import {OtchetComponent} from './otchet/otchet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {path: 'otchet', component: OtchetComponent},
  {path: 'test', component: TestComponent},
  {path: 'changeQuestion/:id', component: ChangeQuestionComponent},
  {path: 'editQuestion', component: EditQuestionComponent},
  {path: 'pre-test', component: PreTestComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'questions', component: QuestionComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'signup', component: SignUpComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
