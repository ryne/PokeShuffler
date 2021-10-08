import React, { Component } from 'react';

export default class CatchPokemon extends Component {
  render() {
    return (
      <>
        <div id="catch" className={this.props.catchEm ? 'active' : ''}></div>
        <div
          className={this.props.catchEm ? 'pokeball active' : 'pokeball'}
        ></div>
      </>
    );
  }
}
