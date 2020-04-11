import React, { useReducer, createContext, useCallback } from 'react';
import { UiSounds } from '../UiSounds';

export const GameContext = createContext();

const ActionType = {
    SET_GAME: 'set-game',
    SET_DIE: 'set-die',
    SET_ACTIVE_BLOCK: 'set-active-block',
    UPDATE_TOKEN_POS: 'update-token-pos',
};

const initialState = {
    players: [],
    ready: false,
    tokensPos: {},
    colorsPos: {},

    die: 6,
    activePlayer: { id: 1, },
    activeBlock: null,
};

const reducer = (state, action) => {
    const { payload, type } = action;

    if (type === ActionType.SET_GAME) {
        return {
            ...state,
            ...payload,
            ready: true,
        }
    }

    if (type === ActionType.SET_DIE) {
        return {
            ...state,
            die: payload.die,
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

    const value = {
        state,
        setGame,
        setDie,
        moveToken,
        setActiveBlock,
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};