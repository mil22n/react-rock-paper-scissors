import React, { Component } from 'react';
import './player.css';
import Assets from '../../model/assets';
import Default from '../../assets/rock.png';

class Player extends Component {
    render() {
        return (
            <div className="player">
                <div className="play-area">
                    {this.props.lastRound && <img className="result-image" src={Assets[this.props.lastRound[this.props.name]]} alt="Result"/>}
                    {!this.props.lastRound && <img className="default-image" src={Default} alt="Default" />}
                </div>
                <div className="player-name">
                    <h3>{this.props.name}</h3>
                </div>
            </div>
        );
    }
}

export default Player;
