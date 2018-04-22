import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {WarningTestComponent} from './warning-test/warning-test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  { path: 'signin', component: SignInComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent, },
  { path: 'signup', component: SignUpComponent},
  { path: 'test', component: WarningTestComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}