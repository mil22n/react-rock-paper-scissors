import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Human from '../../assets/human.png';
import CPU from '../../assets/cpu.png';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <header className="header">
                    <h1>Rock Paper Scissors</h1>
                    <h3>choose your destiny</h3>
                </header>
                <section className="section">
                    <div className="game-modes">
                        <Link className="mode player-vs-cpu" to="/game/Player-vs-CPU">
                            <img className="player" src={Human} alt="Player" />
                            <img className="cpu" src={CPU} alt="CPU" />
                        </Link>
                        <span className="divider"></span>
                        <Link className="mode cpu-vs-cpu" to="/game/CPU-vs-CPU">
                            <img className="cpu" src={CPU} alt="CPU" />
                            <img className="cpu" src={CPU} alt="CPU" />
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;
