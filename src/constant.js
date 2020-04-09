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

const tokenPositionRanges = arrayRange([0, 16], 4);
export const Ranges = {
    Tokens: {
        [ColorName.RED]: tokenPositionRanges[0],
        [ColorName.BLUE]: tokenPositionRanges[1],
        [ColorName.GREEN]: tokenPositionRanges[2],
        [ColorName.YELLOW]: tokenPositionRanges[3],
    },
    Blocks: {
        [ColorName.RED]: [
            [69, 17, 18, 19, 20, 21],
            [68, 70, 71, 72, 73, 74],
            [67, 66, 65, 64, 63, 62],
        ],
        [ColorName.GREEN]: [
            [28, 26, 25, 24, 23, 22],
            [29, 75, 76, 77, 78, 79],
            [30, 31, 32, 33, 34, 35],
        ],
        [ColorName.YELLOW]: [
            [36, 37, 38, 39, 40, 41],
            [89, 88, 87, 86, 85, 42],
            [48, 47, 46, 45, 44, 43],
        ],
        [ColorName.BLUE]: [
            [61, 60, 59, 58, 57, 56],
            [84, 83, 82, 81, 80, 55],
            [49, 50, 51, 52, 53, 54]
        ],
    },
    SafeSpots: [65, 52, 25, 39],
    SafeColorSpots: {
        [ColorName.RED]: [17, 70, 71, 72, 73, 74],
        [ColorName.BLUE]: [57, 84, 83, 82, 81, 80],
        [ColorName.GREEN]: [31, 75, 76, 77, 78, 79],
        [ColorName.YELLOW]: [44, 89, 88, 87, 86, 85],
    },
};