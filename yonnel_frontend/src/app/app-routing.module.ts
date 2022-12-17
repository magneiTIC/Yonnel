import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedComponent } from './components/fixed/fixed.component';
import { RegisterComponent } from './views/Admin/register/register.component';
import { SignInComponent } from './views/Auth/sign-in/sign-in.component';
import { ListeTransactionComponent } from './views/User/liste-transaction/liste-transaction.component';
import { PaiementComponent } from './views/User/paiement/paiement.component';
import { ClientComponent } from './views/User/client/client.component';
import { TransactionComponent } from './views/User/transaction/transaction.component';
import { DeviseComponent } from './views/Admin/devise/devise.component';
import { AgenceComponent } from './views/Admin/agence/agence.component';
import { ListeAgenceComponent } from './views/Admin/liste-agence/liste-agence.component';
import { ListeDeviseComponent } from './views/Admin/liste-devise/liste-devise.component';
import { ListeUserComponent } from './views/Admin/liste-user/liste-user.component';
import { ListePaysComponent } from './views/Admin/liste-pays/liste-pays.component';
import { ListeSousAgenceComponent } from './views/Admin/liste-sous-agence/liste-sous-agence.component';
import { SousAgenceComponent } from './views/Admin/sous-agence/sous-agence.component';
import { PaysComponent } from './views/Admin/pays/pays.component';
import { AuthGuard } from './services/Guard/auth.guard';
import { DashboardComponent } from './views/Admin/dashboard/dashboard.component';
import { UserboardComponent } from './views/User/userboard/userboard.component';

const routes: Routes = [
  {path:'fixed', component:FixedComponent},
  { path: 'signIn', component: SignInComponent },

  { path: 'liste-transaction', component: ListeTransactionComponent,
  data:{title:'Liste agence',expectedStatus:'user'},
  canActivate:[AuthGuard]
 },

  { path: 'paiement/:id', component: PaiementComponent,pathMatch: 'full',
  data:{title:'Liste agence',expectedStatus:'user'},
  canActivate:[AuthGuard]},

  {
    path: 'transaction', component: TransactionComponent,
    data:{title:'Liste agence',expectedStatus:'user'},
    canActivate:[AuthGuard]
 },

  {
    path: 'client', component: ClientComponent ,
  data:{title:'Liste agence',expectedStatus:'user'},
  canActivate:[AuthGuard]
},
  {path: 'devise', component:DeviseComponent},
  {path:'sous-agence', component: SousAgenceComponent},
  {path: 'pays', component:PaysComponent},
  {path:'agence', component: AgenceComponent},
  {
    path:'liste-agence',component: ListeAgenceComponent,
    data:{title:'Liste agence',expectedStatus:'admin'},
    canActivate:[AuthGuard]
  },

 
  {path:'liste-user',component: ListeUserComponent},

  {
    path:'liste-pays',component: ListePaysComponent,
    data:{title:'Liste agence',expectedStatus:'admin'},
    canActivate:[AuthGuard]
  },
  {path:'liste-sous-agence',component: ListeSousAgenceComponent},

  { path: 'admin/user', component: RegisterComponent ,
    data:{title:'Liste agence',expectedStatus:'admin'},
    canActivate:[AuthGuard]
  },

  {path: 'admin/devise', component:DeviseComponent,
    data:{title:'Liste agence',expectedStatus:'admin'},
    canActivate:[AuthGuard]
  },

  {path:'admin/sous-agence', component: SousAgenceComponent,
    data:{title:'Liste agence',expectedStatus:'admin'},
    canActivate:[AuthGuard]
  },

  {path: 'admin/pays', component:PaysComponent ,
  data:{title:'Liste agence',expectedStatus:'admin'},
  canActivate:[AuthGuard]
  },

  {path:'admin/agence', component: AgenceComponent,
  data:{title:'Liste agence',expectedStatus:'admin'},
  canActivate:[AuthGuard]
  },

  {path:'admin/liste-agence',component: ListeAgenceComponent ,
  data:{title:'Liste agence',expectedStatus:'admin'},
  canActivate:[AuthGuard]
  },

  {path:'admin/liste-devise',component: ListeDeviseComponent ,
  data:{title:'Liste agence',expectedStatus:'admin'},
  canActivate:[AuthGuard]
  },

  {path:'admin/liste-user',component: ListeUserComponent ,
  data:{title:'Liste agence',expectedStatus:'admin'},
  canActivate:[AuthGuard]
  },

  {path:'admin/liste-pays',component: ListePaysComponent ,
  data:{title:'Liste agence',expectedStatus:'admin'},
  canActivate:[AuthGuard]
  },

  {path:'admin/liste-sous-agence',component: ListeSousAgenceComponent,
  data:{title:'Liste agence',expectedStatus:'admin'},
  canActivate:[AuthGuard]
  },

  {path:'admin/dashboard', component: DashboardComponent ,
  data:{title:'Liste agence',expectedStatus:'admin'},
  canActivate:[AuthGuard]
  },

  {path:'dashboard',component:UserboardComponent},

  {path:'', redirectTo:'signIn',pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
