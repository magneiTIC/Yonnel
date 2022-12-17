import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './views/Auth/sign-in/sign-in.component';
import { RegisterComponent } from './views/Admin/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ListeTransactionComponent } from './views/User/liste-transaction/liste-transaction.component';
import { PaiementComponent } from './views/User/paiement/paiement.component';

import { TransactionComponent } from './views/User/transaction/transaction.component';
import { FixedComponent } from './components/fixed/fixed.component';
import { ClientComponent } from './views/User/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgenceComponent } from './views/Admin/agence/agence.component';
import { SousAgenceComponent } from './views/Admin/sous-agence/sous-agence.component';
import { ListeSousAgenceComponent } from './views/Admin/liste-sous-agence/liste-sous-agence.component';
import { ListeAgenceComponent } from './views/Admin/liste-agence/liste-agence.component';
import { PaysComponent } from './views/Admin/pays/pays.component';
import { ListePaysComponent } from './views/Admin/liste-pays/liste-pays.component';
import { DeviseComponent } from './views/Admin/devise/devise.component';
import { ListeDeviseComponent } from './views/Admin/liste-devise/liste-devise.component';
import { ListeUserComponent } from './views/Admin/liste-user/liste-user.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/Admin/dashboard/dashboard.component';
import { SideheaderComponent } from './views/Admin/sideheader/sideheader.component';
import { UserboardComponent } from './views/User/userboard/userboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    ListeTransactionComponent,
    PaiementComponent,
    TransactionComponent,
    FixedComponent,
    ClientComponent,
    AgenceComponent,
    SousAgenceComponent,
    ListeSousAgenceComponent,
    ListeAgenceComponent,
    PaysComponent,
    ListePaysComponent,
    DeviseComponent,
    ListeDeviseComponent,
    ListeUserComponent,
    DashboardComponent,
    SideheaderComponent,
    UserboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
