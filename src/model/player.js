import _ from 'lodash';
import { outcomeNames } from "./types";

export default class PlayerModel {
    constructor(name) {
        this.name = name;
    }

    playCPU(previousResult) {
        const randomChoice = this.chooseRandomly(outcomeNames);

        if(!previousResult || !previousResult.winner) {
            return randomChoice;
        }

        const myChoice = previousResult[this.name];
        const opponentChoice = Object.values(_.omit(previousResult, ['winner', this.name]))[0];
        const remainingChoices = _.filter(outcomeNames, (outcome) => outcome !== myChoice && outcome !== opponentChoice);

        if(this.name === previousResult.winner) {
            return Math.random() < 0.9 ? opponentChoice : randomChoice;
        }
        else {
            return Math.random() < 0.9 ? this.chooseRandomly(remainingChoices) : randomChoice;
        }
    }

    chooseRandomly(outcomeArr) {
        const index = Math.floor(Math.random() * (outcomeArr.length));
        return outcomeArr[index];
    }
}