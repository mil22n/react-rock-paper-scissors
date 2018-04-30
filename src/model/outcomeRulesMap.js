import { outcomes } from "./types";

export default {
    [outcomes.ROCK] : {
        wins: [outcomes.SCISSORS, outcomes.LIZARD]
    },
    [outcomes.PAPER] : {
        wins: [outcomes.ROCK, outcomes.SPOCK]
    },
    [outcomes.SCISSORS] : {
        wins: [outcomes.PAPER, outcomes.LIZARD]
    },
    [outcomes.LIZARD] : {
        wins: [outcomes.PAPER, outcomes.SPOCK]
    },
    [outcomes.SPOCK] : {
        wins: [outcomes.SCISSORS, outcomes.ROCK]
    }
}