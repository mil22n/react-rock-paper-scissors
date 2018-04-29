import { outcomes } from "./types";

export default {
    [outcomes.ROCK] : {
        wins: [outcomes.SCISSORS]
    },
    [outcomes.PAPER] : {
        wins: [outcomes.ROCK]
    },
    [outcomes.SCISSORS] : {
        wins: [outcomes.PAPER]
    }
}