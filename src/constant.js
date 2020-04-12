import { arrayRange } from './utils/range';

export const ColorName = {
    RED: 'red',
    BLUE: 'blue',
    GREEN: 'green',
    YELLOW: 'yellow',
};

/*
    TODO: Implement me :)

    @keyframes pulse {
      0% {
        background-color:  #7eace5;
      }
      33.3333% {
        background-color: #3577ca;
      }
      100% {
        background-color:  #7eace5
      }`
    }
*/

export const ColorMap = {
    red: '#ff6f6f',
    blue: '#7eace5',
    green: '#b8e986',
    yellow: '#ffe578'
};

export const TokenColorPos = {
    TOP_LEFT: 'topLeft',
    TOP_RIGHT: 'topRight',
    BOTTOM_LEFT: 'bottomLeft',
    BOTTOM_RIGHT: 'bottomRight',
};

export const DummyGameConfig = {
    players: [
        {
            'id': 1,
            'name': 'Vanessa Hanson',
            'color': 'red',
            'avatar': {
                'url': 'https://randomuser.me/api/portraits/women/9.jpg'
            },
            'isMicrophoneEnabled': false
        },
        {
            'id': 2,
            'name': 'Liam Harper',
            'color': 'blue',
            'avatar': {
                'url': 'https://randomuser.me/api/portraits/men/37.jpg'
            },
            'isMicrophoneEnabled': true
        },
        {
            'id': 3,
            'name': 'Irene Wilson',
            'color': 'green',
            'avatar': {
                'url': 'https://randomuser.me/api/portraits/women/3.jpg'
            },
            'isMicrophoneEnabled': false
        },
        {
            'id': 4,
            'name': 'Antonio Pearson',
            'color': 'yellow',
            'avatar': {
                'url': 'https://randomuser.me/api/portraits/men/93.jpg'
            },
            'isMicrophoneEnabled': false
        }
    ],

    tokensPos: {
        bottomLeft: [0, 1, 2, 3],
        topLeft: [4, 5, 6, 7],
        topRight: [8, 9, 10, 11],
        bottomRight: [12, 13, 14, 15],
    },
    colorsPos: {
        topLeft: ColorName.GREEN,
        topRight: ColorName.BLUE,
        bottomLeft: ColorName.RED,
        bottomRight: ColorName.YELLOW,
    },
};