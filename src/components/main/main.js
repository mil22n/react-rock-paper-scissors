import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setGameMode } from "../../actions";
import { gameModes } from "../../model/types";

import Human from '../../assets/human.png';
import CPU from '../../assets/cpu.png';
import './main.css';

class Main extends Component {
    componentDidMount() {
        this.props.setGameMode(null);
    }

    setGameMode(event, gameMode) {
        event.stopPropagation();
        this.props.setGameMode(gameMode);
    }

    render() {
        return (
            <div className="main container">
                <header className="header">
                    <h1>Rock Paper Scissors</h1>
                    <h3 className="subtitle">choose your destiny</h3>
                </header>
                <section className="section">
                    <div className="game-modes text-center">
                        <div className={`mode player-vs-cpu ${this.props.game.mode === gameModes.PVC ? "active" : ""}`}
                            onClick={(e) => { this.setGameMode(e, gameModes.PVC)}}>
                            <img className="player" src={Human} alt="Player" />
                            <img className="cpu" src={CPU} alt="CPU" />
                            <div className="mode-name">Player vs. CPU</div>
                        </div>
                        <div className="divider"></div>
                        <div className={`mode cpu-vs-cpu ${this.props.game.mode === gameModes.CVC ? "active" : ""}`}
                            onClick={(e) => { this.setGameMode(e, gameModes.CVC)}}>
                            <img className="cpu" src={CPU} alt="CPU" />
                            <img className="cpu" src={CPU} alt="CPU"  />
                            <div className="mode-name">CPU vs. CPU</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link className="btn btn-lg btn-dark" to="/game">Begin!</Link>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
};

export default connect(mapStateToProps, { setGameMode })(Main);
