import { outcomeNames } from "./types";

export default class PlayerModel {
    constructor(name) {
        this.name = name;
    }

    playCPU(previousResult) {
        /*if(!previousResult) {
            const index = Math.floor(Math.random() * this.choices.length);
            return this.choices[index];
        }*/

        //TODO: implement play logic based on the previous result
        const index = Math.floor(Math.random() * (outcomeNames.length));
        return outcomeNames[index];
    }
}