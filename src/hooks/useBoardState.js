import { useReducer } from 'react';
import { defaults } from 'lodash/object';
import { ColorMap, ColorName, Ranges } from '../constant';

// TODO below is just for debugging purposes for now :)
// import { arrayRange } from '../utils/range';
// const tokenPositionRanges = arrayRange([0, 16], 4);
// const initialState = {
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
    dice: {
        isRolling: false,
    },
    tokenPosition: { ...Ranges.Tokens }
};

const ActionType = {
    MOVE_TOKEN: 'move-token',
};

const updateTokenPosition = (state, { color, tokenIndex, pos }) => {
    const newPosition = [...state[color]];
    newPosition.splice(tokenIndex, 1, pos);
    return { ...state, [color]: newPosition };
};

/**
 * @param {Object} [customInitialState]
 * @return {[React.ReducerStateWithoutAction<initialState>, React.DispatchWithoutAction]}
 */
export const useBoardState = (customInitialState = {}) => {
    return useReducer(
        (state, action) => {
            const { payload, type } = action;

            switch (type) {
                case ActionType.MOVE_TOKEN:
                    return {
                        ...state,
                        tokenPosition: updateTokenPosition(state.tokenPosition, payload)
                    };

                default:
                    return state;
            }
        },
        defaults(customInitialState, initialState),
    );
};
