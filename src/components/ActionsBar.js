import React, { Component } from 'react';
import { FaRandom } from 'react-icons/fa';
import { CgPokemon } from 'react-icons/cg';
import { GiPokecog } from 'react-icons/gi';

export default class ActionsBar extends Component {
  render() {
    return (
      <div id="actions">
        <button
          disabled={this.props.loading}
          className={this.props.loading ? 'disabled' : ''}
          onClick={this.props.shufflePokemon}
        >
          <FaRandom style={{ transform: 'scale(0.8)' }} />
        </button>
        <button
          disabled={this.props.loading}
          className={this.props.loading ? 'catch disabled' : 'catch'}
          onClick={this.props.catchPokemon}
        >
          <CgPokemon style={{ transform: 'scale(1.2)' }} />
        </button>
        <button
          disabled={this.props.loading || this.props.pokedex === false}
          className={this.props.pokedex ? 'pokedex active' : 'pokedex disabled'}
        >
          <GiPokecog />
        </button>
      </div>
    );
  }
}
