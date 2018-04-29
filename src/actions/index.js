import { NEW_GAME, PLAY_ROUND } from "./types";

export const newGame = (game) => {
    return {
        type: NEW_GAME,
        payload: game.toState()
    }
};

export const playRound = (game, playerOutcome) => {
    game.playRound(playerOutcome);

    return {
        type: PLAY_ROUND,
        payload: game.toState()
    }
};