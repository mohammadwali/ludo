import { useReducer } from 'react';
import { defaults } from 'lodash/object';
import { ColorMap, ColorName, Ranges } from '../constant';

// TODO below is just for debugging purposes for now :)
// import { arrayRange } from '../utils/range';
// const tokenPositionRanges = arrayRange([0, 16], 4);
// const initialState = {
//     players: [
//         { color: ColorName.RED, name: 'player 1' },
//         { color: ColorMap.BLUE, name: 'player 2' }
//     ],
//
//     board: {
//         tokenPosition: {
//             [ColorName.RED]: [0, 1, 2, 65], //tokenPositionRanges[0],
//             [ColorName.BLUE]: [4, 5, 6, 33],// tokenPositionRanges[1],
//             [ColorName.GREEN]: tokenPositionRanges[2],
//             [ColorName.YELLOW]: tokenPositionRanges[3],
//         }
//     }
// };

const initialState = {
    players: [
        { color: ColorName.RED, name: 'player 1' },
        { color: ColorMap.BLUE, name: 'player 2' }
    ],

    board: {
        tokenPosition: { ...Ranges.Tokens }
    }
};


const ActionType = {
    MOVE_TOKEN: '@game/move-token',
};

const updateTokenPosition = (state, { color, tokenIndex, pos }) => {
    const newPosition = [...state[color]];
    newPosition.splice(tokenIndex, 1, pos);

    return { ...state, [color]: newPosition };
};

const handleMoveToken = (state, payload) => {
    return {
        ...state,
        board: {
            ...state.board,
            tokenPosition: updateTokenPosition(state.board.tokenPosition, payload)
        }
    };
};

/**
 * @param {Object} [customInitialState]
 * @return {[React.ReducerStateWithoutAction<initialState>, React.DispatchWithoutAction]}
 */
export const useGameState = (customInitialState = {}) => {
    return useReducer(
        (state, action) => {
            const { payload, type } = action;

            switch (type) {
                case ActionType.MOVE_TOKEN:
                    return handleMoveToken(state, payload);

                default:
                    return state;
            }
        },
        defaults(customInitialState, initialState),
    );
};
