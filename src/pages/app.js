import React, { Component } from 'react';

import Info from './info';

class App extends Component {
  routeToSingnUp = () => {
    this.props.history.push('/signup');
  }
  routeToSingnIn = () => {
    this.props.history.push('/login');
  }
  render() {
    return (
      <div>
        <Info />
        <button onClick={this.routeToSingnIn}>Singn In</button>
        <button onClick={this.routeToSingnUp}>SingnUp</button>
      </div>
    );
  }
}
export default App;
