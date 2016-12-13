import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css']
})
export class PokemonDisplayComponent implements OnInit {
  @Input() pokemon;

  constructor() { }

  ngOnInit() {
  }

  getTypes() {
    return this.pokemon.types.map(({ type }) => type.name).join(', ');
  }
}
