import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Player from "../player/player";
import GameModel from '../../model/game';
import { gameModes } from "../../model/types";
import { outcomes } from "../../model/types";

import { newGame, playRound, setPlayerChoice } from '../../actions';
import './game.css';

class Game extends Component {
    componentDidMount() {
        this.newGame();
    }

    newGame() {
        this.game = new GameModel(this.props.game.mode);
        this.props.newGame(this.game);

        delete this.playerOneOutcome;
        delete this.playerTwoOutcome;
    }

    playRound() {
        this.props.playRound(this.game, this.props.game.choice);
        const lastRound = this.game.results[this.game.results.length - 1];

        this.playerOneOutcome = lastRound[this.props.game.playerOneName];
        this.playerTwoOutcome = lastRound[this.props.game.playerTwoName];
    }

    selectOutcome(event) {
        event.stopPropagation();
        this.props.setPlayerChoice(event.target.value);
    }

    render() {
        return (
            <div className="game container">
                <header className="header">
                    <h1>Rock Paper Scissors</h1>
                    <Link className="btn btn-link" to="/">Back to Home</Link>
                </header>
                <section className="section text-center">
                    <div>
                        <div className="player-one">
                            <Player
                                name={this.props.game.playerOneName}
                                result={this.playerOneOutcome} />
                        </div>
                        {/*<div className="score">{this.props.game.score}</div>*/}
                        <div className="player-two">
                            <Player
                                name={this.props.game.playerTwoName}
                                result={this.playerTwoOutcome} />
                        </div>
                    </div>
                    <div className="control">
                        <div className="choice">
                            {
                                this.props.game.mode === gameModes.PVC &&
                                <select onChange={this.selectOutcome.bind(this)} value={this.props.game.choice}>
                                    { Object.values(outcomes).map(outcome => {
                                        return (
                                            <option key={outcome} value={outcome}>{outcome}</option>
                                        );
                                    })}
                                </select>
                            }
                            <button className="btn btn-dark btn-lg" onClick={this.playRound.bind(this)}>Play!</button>
                        </div>

                        <button className="btn btn-primary btn-sm"  onClick={this.newGame.bind(this)}>New Game</button>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { game: state.game };
};

export default connect(mapStateToProps, { newGame, playRound, setPlayerChoice })(Game);
