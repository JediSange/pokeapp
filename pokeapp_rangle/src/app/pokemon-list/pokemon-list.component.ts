import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemon = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getAllPokemon()
      .subscribe(({ results }) => {
        this.pokemon = results;
      });
  }

}
