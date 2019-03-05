import { Component } from 'react';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

class App extends Component {
  state = {
    gifts: []
  };

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({ gifts });
    console.log(this.state);

  };

  addGift = () => {
    const { gifts } = this.state;

    const ids = this.state.gifts.map(gift => gift.id);

    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    gifts.push({ id: maxId + 1 });

    this.setState({ gifts: gifts });
  };

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return <Gift key={gift.id} 
            gift={gift}
            removeGift={this.removeGift}/>;
          })}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
