import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

export interface Pokemon {
  name: string;
  types: any[];
}

@Injectable()
export class PokemonService {

  constructor(private http: Http) { }

  getAllPokemon = () => {
    return this.http.get('http://pokeapi.co/api/v2/pokemon/')
      .map(response => response.json());
  }

  getPokemon = (name: string) => {
    return this.http.get(`http://pokeapi.co/api/v2/pokemon/${name}/`)
      .map<Pokemon>(response => response.json());
  }
}
