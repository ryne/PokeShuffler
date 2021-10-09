import React, { Component } from 'react';

export default class PokemonCard extends Component {
  render() {
    return (
      <div id="pokemon" className={this.props.catchEm ? 'active' : ''}>
        {this.props.appLoading ? (
          <>
            <p>
              <span>####</span>
              <strong>...</strong>
            </p>
          </>
        ) : (
          <>
            <img
              src={this.props.sprite}
              alt={this.props.name}
              className="pokemonImage"
            />
            <p style={{ color: `${this.props.data.darkVibrant}` }}>
              <span>#{this.props.number}</span>
              <strong>{this.props.name}</strong>
            </p>
          </>
        )}
      </div>
    );
  }
}
