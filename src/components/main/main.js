import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Human from '../../assets/human.png';
import CPU from '../../assets/cpu.png';
import './main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { mode: '', url: '' };
    }

    setActiveMode(event, gameMode) {
        event.stopPropagation();
        this.setState({mode: gameMode, url: `/game/${gameMode}`});
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
                        <div className={`mode player-vs-cpu ${this.state.mode === "player-vc-cpu" ? "active" : ""}`}
                            onClick={(e) => { this.setActiveMode(e, "player-vc-cpu")}}>
                            <img className="player" src={Human} alt="Player" />
                            <img className="cpu" src={CPU} alt="CPU" />
                            <div className="mode-name">Player vs. CPU</div>
                        </div>
                        <div className="divider"></div>
                        <div className={`mode cpu-vs-cpu ${this.state.mode === "cpu-vs-cpu" ? "active" : ""}`}
                            onClick={(e) => { this.setActiveMode(e, 'cpu-vs-cpu')}}>
                            <img className="cpu" src={CPU} alt="CPU" />
                            <img className="cpu" src={CPU} alt="CPU"  />
                            <div className="mode-name">CPU vs. CPU</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link className="btn btn-lg btn-dark" to={this.state.url}>Begin!</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;
