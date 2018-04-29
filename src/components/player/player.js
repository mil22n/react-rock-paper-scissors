import React, { Component } from 'react';
import './player.css';
import Assets from '../../model/assets';

class Player extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="player">
                <div className="play-area">
                    <img className="result-image" src={Assets[this.props.result]} alt="Result"/>
                </div>
                <div className="player-name">
                    {this.props.playerName}
                </div>
            </div>
        );
    }
}

export default Player;
