import PlayerModel from './player';
import { gameModes } from "./types";
import outcomeRulesMap from './outcomeRulesMap';
import _ from 'lodash';

export default class GameModel {
    constructor(mode = gameModes.CVC, playerOneName = 'Player One', playerTwoName = 'Player Two', results = [], score = [0, 0]) {
        this.playerOne = new PlayerModel(playerOneName);
        this.playerTwo = new PlayerModel(playerTwoName);
        this.mode = mode;
        this.results = results;
        this.score = score;
    }

    playRound(playerOneOutcome) {
        const resLength = this.results.length;
        const previousResult = resLength > 0 ? this.results[resLength - 1] : null;

        if(this.mode === gameModes.CVC) {
            playerOneOutcome = this.playerOne.playCPU(previousResult);
        }

        const result = {
            [this.playerOne.name]: playerOneOutcome,
            [this.playerTwo.name]: this.playerTwo.playCPU(previousResult)
        };

        this.updateScore(result);
        this.results.push(result);
    }

    updateScore(result) {
        const playerOneOutcome = result[this.playerOne.name];
        const playerTwoOutcome = result[this.playerTwo.name];

        if(playerOneOutcome === playerTwoOutcome) {
            this.score[0] += 0.5;
            this.score[1] += 0.5;

            return;
        }

        if(outcomeRulesMap[playerOneOutcome].wins.indexOf(playerTwoOutcome) >= 0) {
            result.winner = this.playerOne.name;
            this.score[0] += 1;
        }
        else {
            result.winner = this.playerTwo.name;
            this.score[1] += 1;
        }
    }

    toState() {
        return _.cloneDeep({
            playerOneName : this.playerOne.name,
            playerTwoName : this.playerTwo.name,
            mode : this.mode,
            results : this.results,
            score : this.score[0] + ' - ' + this.score[1]
        });
    }
}

