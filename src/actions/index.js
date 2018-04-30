import { NEW_GAME, PLAY_ROUND, SET_GAME_MODE, SET_PLAYER_CHOICE } from "./types";

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

export const setGameMode = (mode) => {
    return {
        type: SET_GAME_MODE,
        payload: mode
    }
};

export const setPlayerChoice = (choice) => {
    return {
        type: SET_PLAYER_CHOICE,
        payload: choice
    }
};