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

const initialTokens = arrayRange([0, 16], 4);

export const BoardConfig = {
    map: {
        bottomLeft: {
            homeBlock: 20,
            finishBlock: 89,
            tokens: initialTokens[0],
            lastPathBlock: 27,
            finishRange: arrayRange([22, 27]).reverse(),
            block: arrayRange([16, 34], 6),
        },
        topLeft: {
            homeBlock: 35,
            finishBlock: 90,
            tokens: initialTokens[1],
            lastPathBlock: 40,
            finishRange: arrayRange([41, 46]),
            block: arrayRange([34, 52], 6),
        },
        topRight: {
            homeBlock: 65,
            finishBlock: 91,
            tokens: initialTokens[2],
            lastPathBlock: 58,
            finishRange: arrayRange([59, 64]),
            block: arrayRange([52, 70], 6),
        },
        bottomRight: {
            homeBlock: 86,
            finishBlock: 92,
            tokens: initialTokens[3],
            lastPathBlock: 81,
            finishRange: arrayRange([76, 81]).reverse(),
            block: arrayRange([70, 88], 6),
        },
        safeSpots: [48, 54, 73, 31],
    },

    path: [
        ...arrayRange([16, 21]).reverse(),
        ...arrayRange([46, 52]).reverse(),
        40,
        ...arrayRange([34, 40]),
        ...arrayRange([52, 58]).reverse(),
        58,
        ...arrayRange([64, 70]),
        ...arrayRange([70, 76]),
        81,
        ...arrayRange([82, 88]).reverse(),
        ...arrayRange([28, 34]),
        27,
        21
    ]
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