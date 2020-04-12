import React, { useReducer, createContext, useCallback } from 'react';
import { getNextBlockPos } from '../utils/boardHelper';

export const GameContext = createContext();

const ActionType = {
    SET_GAME: 'set-game',
    SET_DIE: 'set-die',
    SET_ACTIVE_BLOCK: 'set-active-block',
    SET_CURRENT_BLOCK: 'set-current-block',
    UPDATE_TOKEN_POS: 'update-token-pos',
    SWITCH_TO_NEXT_BLOCK: 'switch-to-next-block',
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
    currentBlock: null,
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

    if (type === ActionType.SET_CURRENT_BLOCK) {
        return {
            ...state,
            currentBlock: payload.block,
        }
    }

    if (type === ActionType.SWITCH_TO_NEXT_BLOCK) {
        return {
            ...state,
            activeBlock: null,
            currentBlock: payload.block,
        }
    }

    return state;
};

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGame = useCallback(
        ({ players, colorsPos, tokensPos, currentBlock }) => {
            dispatch({
                type: ActionType.SET_GAME,
                payload: { players, colorsPos, tokensPos, currentBlock }
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

    const setCurrentBlock = useCallback(
        ({ block }) => {
            dispatch({
                type: ActionType.SET_CURRENT_BLOCK,
                payload: { block }
            });
        },
        [dispatch]
    );

    const switchToNextBlock = useCallback(
        (args) => {
            dispatch({
                type: ActionType.SWITCH_TO_NEXT_BLOCK,
                payload: { block: getNextBlockPos(state.currentBlock) }
            });
        },
        [state.currentBlock, dispatch]
    );

    const value = {
        state,
        setGame,
        setDie,
        moveToken,
        setActiveBlock,
        setCurrentBlock,
        switchToNextBlock,
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};