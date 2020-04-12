import React, { useReducer, createContext, useCallback } from 'react';
import { UiSounds } from '../UiSounds';

export const GameContext = createContext();

const ActionType = {
    SET_GAME: 'set-game',
    SET_DIE: 'set-die',
    SET_ACTIVE_BLOCK: 'set-active-block',
    UPDATE_TOKEN_POS: 'update-token-pos',
    PASS_TO_NEXT_PLAYER: 'pass-to-next-player',
};

const initialState = {
    players: [],
    ready: false,
    tokensPos: {},
    colorsPos: {},

    die: -1,
    lastDie: [],
    activePlayer: { id: -1 },
    activeBlock: null,
};

const reducer = (state, action) => {
    const { payload, type } = action;

    if (type === ActionType.SET_GAME) {
        return {
            ...state,
            ...payload,
            ready: true,
            activePlayer: payload.players[0]
        }
    }

    if (type === ActionType.SET_DIE) {
        return {
            ...state,
            die: payload.die,
            lastDie: payload.die > 1 ? state.lastDie.concat(payload.die) : [],
        }
    }

    if (type === ActionType.UPDATE_TOKEN_POS) {
        const newTokenColorPos = state.tokensPos[payload.colorPos];
        newTokenColorPos.splice(payload.index, 1, payload.pos);

        return {
            ...state,
            tokensPos: {
                ...state.tokensPos,
                [payload.colorPos]: newTokenColorPos
            },
        }
    }

    if (type === ActionType.SET_ACTIVE_BLOCK) {
        return {
            ...state,
            activeBlock: payload.block,
        }
    }

    if (type === ActionType.PASS_TO_NEXT_PLAYER) {
        const { players, activePlayer } = state;
        const playerIndex = players.findIndex((player) => activePlayer.id === player.id) + 1;
        const nextPlayer = playerIndex > (players.length - 1) ? players[0] : players[playerIndex];

        return {
            ...state,
            activePlayer: nextPlayer,
        }
    }

    return state;
};

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGame = useCallback(
        ({ players, colorsPos, tokensPos }) => {
            dispatch({
                type: ActionType.SET_GAME,
                payload: { players, colorsPos, tokensPos }
            });
        },
        [dispatch]
    );

    const setDie = useCallback(
        ({ die }) => {
            dispatch({
                type: ActionType.SET_DIE,
                payload: { die }
            });
        },
        [dispatch]
    );

    const moveToken = useCallback(
        ({ colorPos, index, pos }) => {
            dispatch({
                type: ActionType.UPDATE_TOKEN_POS,
                payload: { colorPos, index, pos }
            });
        },
        [dispatch]
    );

    const setActiveBlock = useCallback(
        ({ block }) => {
            dispatch({
                type: ActionType.SET_ACTIVE_BLOCK,
                payload: { block }
            });
        },
        [dispatch]
    );

    const passToNextPlayer = useCallback(
        () => {
            dispatch({
                type: ActionType.PASS_TO_NEXT_PLAYER,
                payload: {}
            });
        },
        [dispatch]
    );

    const value = {
        state,
        setGame,
        setDie,
        moveToken,
        setActiveBlock,
        passToNextPlayer,
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};