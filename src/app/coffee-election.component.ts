import { Component } from '@angular/core';
import { CoffeeElectionStore } from './coffee-election.store';

@Component({
  selector: 'coffee-election',
  templateUrl: './coffee-election.component.html',
  providers: [CoffeeElectionStore]
})
export class CoffeeElectionComponent {
  constructor (private store: CoffeeElectionStore) {}
}
