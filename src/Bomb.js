// your Bomb code here!
import React from 'react';

class Bomb extends React.Component{
  state= {
    secondsLeft: this.props.initialCount
  }
  timer = () => {
    if(this.state.secondsLeft > 0) {
      return this.state.secondsLeft + " seconds left before I go boom!"
    } else {
      return 'Boom!'
    }
  }
  render() {
    return <h3>{this.timer()}</h3>
  }
}
export default Bomb;
