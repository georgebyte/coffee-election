import { Injectable } from '@angular/core';
import { Store } from './store';
import { CoffeeElectionState } from './coffee-election-state';

@Injectable()
export class CoffeeElectionStore extends Store<CoffeeElectionState> {
  constructor () {
    super(new CoffeeElectionState());
  }

  addVote (candidate: {name: string, votes: number}): void {
    this.setState({
      ...this.state,
      candidates: this.state.candidates.map(c => {
        if (c === candidate) {
          return {...c, votes: c.votes + 1};
        }
        return c;
      })
    });
  }

  addCandidate (name: string): void {
    this.setState({
      ...this.state,
      candidates: [...this.state.candidates, {name: name, votes: 0}]
    });
  }
}
