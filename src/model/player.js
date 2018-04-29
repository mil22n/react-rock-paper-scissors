import { outcomes } from "./types";

export default class Player {
    constructor(name) {
        this.name = name;
        this.choices = Object.keys(outcomes);
    }

    playCPU(previousResult) {
        if(!previousResult) {
            const index = Math.floor(Math.random() * (this.choices.length - 1));
            return this.choices[index];
        }

        //TODO: implement play logic based on the previous result
    }
}