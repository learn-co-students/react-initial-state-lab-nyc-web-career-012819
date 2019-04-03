import React from 'react';

class Bomb extends React.Component {
  state = {
    secondsLeft: this.props.initialCount
  }

  render() {
    return (
        this.state.secondsLeft === 0 ?
          <p>Boom!</p> :
          <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    );
  }
}

export default Bomb;