import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Human from '../../assets/human.png';
import CPU from '../../assets/cpu.png';
import './main.css';

class Main extends Component {
    render() {
        return (
            <div className="main container">
                <header className="header">
                    <h1>Rock Paper Scissors</h1>
                    <h3 className="subtitle">choose your destiny</h3>
                </header>
                <section className="section">
                    <div className="game-modes text-center">
                        <div className="mode">
                            <Link className="player-vs-cpu" to="/game/Player-vs-CPU">
                                <img className="player" src={Human} alt="Player" />
                                <img className="cpu" src={CPU} alt="CPU" />
                            </Link>
                            <div className="mode-name">Player vs. CPU</div>
                        </div>
                        <div className="divider"></div>
                        <div className="mode">
                            <Link className="cpu-vs-cpu" to="/game/CPU-vs-CPU">
                                <img className="cpu" src={CPU} alt="CPU" />
                                <img className="cpu" src={CPU} alt="CPU" />
                            </Link>
                            <div className="mode-name">CPU vs. CPU</div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;
