import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  name;
  pokemon;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get the name from the URL route
    this.route.params.subscribe(params => {
      this.name = params['name'];
    });

    // Fetch the given Pokemon details
    this.pokemonService.getPokemon(this.name).subscribe(pokemon => {
      this.pokemon = this.buildPokemonFromData(pokemon);
    });
  }

  private buildPokemonFromData(pokemonData) {
    // Build the pokemon array to return
    let pokemon = [];

    // Add name from data
    pokemon['name'] = pokemonData['name'];

    // Add types from data
    pokemon['types'] = [];
    pokemonData['types'].forEach(element => {
      pokemon['types'].push(element.type.name);
    });

    // Return the built array
    return pokemon;
  }
}
