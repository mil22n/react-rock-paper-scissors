import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link className="mode player-vs-cpu" to="/game/Player-vs-CPU">PvC</Link>
                        <Link className="mode cpu-vs-cpu" to="/game/CPU-vs-CPU">CvC</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;
