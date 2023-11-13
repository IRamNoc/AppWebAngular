import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { MenuComponent } from './template/menu/menu.component';
import { UsersComponent } from './pages/users/users.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { LegalsComponent } from './pages/legals/legals.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { MentionComponent } from './pages/mention/mention.component';
import { RgpdComponent } from './pages/rgpd/rgpd.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { EventsPipe } from './shared/pipes/events.pipe';
import { EvenementComponent } from './pages/evenement/evenement.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    UsersComponent,
    AccueilComponent,
    EvenementsComponent,
    InscriptionComponent,
    ProfilComponent,
    ConnexionComponent,
    LegalsComponent,
    ErreurComponent,
    MentionComponent,
    RgpdComponent,
    ContactComponent,
    EventsPipe,
    EvenementComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
