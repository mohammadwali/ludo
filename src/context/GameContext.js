import React, { useReducer, createContext, useCallback } from 'react';

export const GameContext = createContext();

const ActionType = {
    SET_GAME: 'set-game',
    UPDATE_TOKEN_POS: 'update-token-pos',
};

const initialState = {
    players: [],
    ready: false,
    tokensPos: {},
    colorsPos: {},
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

    const value = {
        state,
        setGame
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};