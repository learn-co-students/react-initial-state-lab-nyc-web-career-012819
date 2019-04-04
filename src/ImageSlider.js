import React, {Component} from 'react'
import Bomb from './Bomb.js'

class ImageSlider extends Component {
  state = {
    currentSlideIndex: 0
  };

  render() {
    return(
      <div>
        <div>I am on slide {this.state.currentSlideIndex}</div>
      </div>
    )
  }
}

export default ImageSlider
