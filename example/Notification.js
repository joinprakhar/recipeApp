import React, { Component } from 'react'

class Notification extends Component {
 state = {
    show: false
};     
toggleDisplay = () => {
    this.setState(
        {show : !this.state.show});
}  
    
  render() {
    return (
      <div>
            <button onClick={this.toggleDisplay}>toggle</button>
            {this.state.show ? (
            <p className='show'>{this.props.text || "No notification"}</p>) : null
        }
      </div>
    )
  }
}

export default Notification