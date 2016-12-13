import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { TrainerInfoComponent } from './trainer-info/trainer-info.component';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';

import { PokemonService } from './pokemon.service';
import { UserService } from './user.service';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'detail/:name', component: PokemonDetailComponent },
  { path: 'me', component: TrainerInfoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    TrainerInfoComponent,
    PokemonDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    PokemonService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }