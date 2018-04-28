import React, { Component } from 'react';
import { connect } from 'react-redux';

class Game extends Component {
    render() {
        return (
            <div className="game">
                <header className="header">
                    <h1>Rock Paper Scissors</h1>
                </header>
                <section className="section">
                    <div className="player-one"></div>
                    <div className="score"></div>
                    <div className="player-two"></div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { game: state.game };
};

export default connect(mapStateToProps)(Game);
