import React, { Component } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="player">
                <div className="play-area">
                    <img src={this.props.image} alt="Result"/>
                </div>
                <div className="player-name">
                    {this.props.playerName}
                </div>
            </div>
        );
    }
}

export default Player;
