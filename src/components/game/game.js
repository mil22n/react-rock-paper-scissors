import React, { Component } from 'react';
import { connect } from 'react-redux';

import './game.css';
import Player from "../player/player";
import GameModel from '../../model/game';
import { newGame } from '../../actions';

class Game extends Component {
    componentDidMount() {
        this.game = new GameModel();
        this.props.newGame(this.game);
    }

    render() {
        return (
            <div className="game">
                <header className="header">
                    <h1>Rock Paper Scissors</h1>
                </header>
                <section className="section">
                    <div>
                        <div className="player-one">
                            <Player playerName={this.props.game.playerOneName} />
                        </div>
                        <div className="score">{this.props.game.score}</div>
                        <div className="player-two">
                            <Player playerName={this.props.game.playerTwoName} />
                        </div>
                    </div>
                    <div className="control">
                        <div className="choice">

                        </div>

                        <button>Play!</button>
                        <button>New Game</button>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { game: state.game };
};

export default connect(mapStateToProps, { newGame })(Game);
