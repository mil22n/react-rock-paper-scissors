import React, { Component } from 'react';
import { connect } from 'react-redux';
import './game.css';
import Player from "../player/player";

class Game extends Component {
    render() {
        return (
            <div className="game">
                <header className="header">
                    <h1>Rock Paper Scissors</h1>
                </header>
                <section className="section">
                    <div>
                        <div className="player-one">
                            <Player playerName={"playerOne"} />
                        </div>
                        <div className="score"></div>
                        <div className="player-two">
                            <Player playerName={"CPU"} />
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

export default connect(mapStateToProps)(Game);
