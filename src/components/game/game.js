import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './game.css';
import Player from "../player/player";
import GameModel from '../../model/game';
import { newGame, playRound } from '../../actions';

class Game extends Component {
    componentDidMount() {
        this.newGame();
    }

    playRound() {
        this.props.playRound(this.game);
        const lastRound = this.game.results[this.game.results.length - 1];

        this.playerOneOutcome = lastRound[this.props.game.playerOneName];
        this.playerTwoOutcome = lastRound[this.props.game.playerTwoName];

    }

    newGame() {
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
                            <Player playerName={this.props.game.playerOneName} result={this.playerOneOutcome} />
                        </div>
                        <div className="score">{this.props.game.score}</div>
                        <div className="player-two">
                            <Player playerName={this.props.game.playerTwoName} result={this.playerTwoOutcome} />
                        </div>
                    </div>
                    <div className="control">
                        <div className="choice">

                        </div>

                        <button onClick={this.playRound.bind(this)}>Play!</button>
                        <button onClick={this.newGame.bind(this)}>New Game</button>
                        <Link to="/">Back to home screen</Link>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { game: state.game };
};

export default connect(mapStateToProps, { newGame, playRound })(Game);
