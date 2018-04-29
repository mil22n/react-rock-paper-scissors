import { NEW_GAME} from "./types";

export const newGame = (gameState) => {
    return {
        type: NEW_GAME,
        payload: gameState.toState()
    }
};