import { useReducer } from 'react';
import { defaults } from 'lodash/object';
import { ColorName } from '../constant';

const initialState = {
    players: [
        {
            id: 1,
            name: 'Vanessa Hanson',
            color: ColorName.RED,
            avatar: {
                url: 'https://randomuser.me/api/portraits/women/9.jpg'
            },
            isMicrophoneEnabled: false
        },
        {
            id: 3,
            name: 'Irene Wilson',
            color: ColorName.GREEN,
            avatar: {
                url: 'https://randomuser.me/api/portraits/women/3.jpg'
            },
            isMicrophoneEnabled: false
        },
        {
            id: 2,
            name: 'Antonio Pearson',
            color: ColorName.BLUE,
            avatar: {
                url: 'https://randomuser.me/api/portraits/men/37.jpg'
            },
            isMicrophoneEnabled: true
        },
        {
            id: 4,
            name: 'Liam Harper',
            color: ColorName.YELLOW,
            avatar: {
                url: 'https://randomuser.me/api/portraits/men/93.jpg'
            },
            isMicrophoneEnabled: false
        },
    ]
};

export const ActionType = {};

/**
 * @param {Object} [customInitialState]
 * @return {[React.ReducerStateWithoutAction<initialState>, React.DispatchWithoutAction]}
 */
export const usePlayersState = (customInitialState = {}) => {
    return useReducer(
        (state, action) => {
            const { payload, type } = action;

            switch (type) {

                default:
                    return state;
            }
        },
        defaults(customInitialState, initialState),
    );
};
