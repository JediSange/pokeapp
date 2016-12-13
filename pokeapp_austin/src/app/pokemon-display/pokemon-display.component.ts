import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css']
})
export class PokemonDisplayComponent {
  @Input() pokemon;
}
