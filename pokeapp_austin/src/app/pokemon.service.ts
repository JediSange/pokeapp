import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  cache = {};
  base_url = 'http://pokeapi.co/api/v2/pokemon/';

  constructor(private http: Http) { }

  getAllPokemon = () => {
    return this.fetchData(this.base_url);    
  }

  getPokemon = (name: string) => {    
    return this.fetchData(this.base_url + name);
  }

  private fetchData(url) {
    // Check the cache if we have it
    if(this.cache[url]) {
      return Observable.of(this.cache[url]);
    }

    // Otherwise, fetch the data from the given URL and cache
    return this.http.get(url)
      .map(response => {
        let data = response.json();
        this.cache[url] = data;
        return data; 
      });
  }
}
