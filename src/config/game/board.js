import { arrayRange } from '../../utils/range';

const initialTokens = arrayRange([0, 16], 4);

const BoardMap = {
    bottomLeft: {
        finishBlock: 89,
        tokens: initialTokens[0],
        lastPathBlock: 27,
        homeBlocks: [20, ...arrayRange([22, 27])],
        block: arrayRange([16, 34], 6),
    },
    topLeft: {
        finishBlock: 90,
        lastPathBlock: 40,
        tokens: initialTokens[1],
        homeBlocks: [35, ...arrayRange([41, 46])],
        block: arrayRange([34, 52], 6),
    },
    topRight: {
        finishBlock: 91,
        lastPathBlock: 58,
        tokens: initialTokens[2],
        homeBlocks: [65, ...arrayRange([59, 64])],
        block: arrayRange([52, 70], 6),
    },
    bottomRight: {
        finishBlock: 92,
        lastPathBlock: 81,
        tokens: initialTokens[3],
        homeBlocks: [86, ...arrayRange([76, 81])],
        block: arrayRange([70, 88], 6),
    },
    safeSpots: [48, 54, 73, 31],
};

const BoardPath = {
    bottomLeft: [
        ...arrayRange([16, 21]).reverse(),
        ...arrayRange([46, 52]).reverse(),
        40,
        ...arrayRange([34, 40]),
        ...arrayRange([52, 58]).reverse(),
        58,
        ...arrayRange([64, 76]),
        81,
        ...arrayRange([82, 88]).reverse(),
        ...arrayRange([28, 34]),
        27,
        ...arrayRange([22, 27]).reverse()
    ],
    topLeft: [
        ...arrayRange([35, 40]),
        ...arrayRange([52, 58]).reverse(),
        58,
        ...arrayRange([64, 76]),
        81,
        ...arrayRange([82, 88]).reverse(),
        ...arrayRange([28, 34]),
        27,
        ...arrayRange([16, 21]).reverse(),
        ...arrayRange([46, 52]).reverse(),
        ...arrayRange([40, 46])
    ],
    topRight: [
        ...arrayRange([65, 76]),
        81,
        ...arrayRange([82, 88]).reverse(),
        ...arrayRange([28, 34]),
        27,
        ...arrayRange([16, 22]).reverse(),
        ...arrayRange([46, 52]).reverse(),
        40,
        ...arrayRange([34, 40]),
        ...arrayRange([52, 58]).reverse(),
        ...arrayRange([58, 64]),
    ],
    bottomRight: [
        ...arrayRange([82, 87]).reverse(),
        ...arrayRange([28, 34]),
        27,
        ...arrayRange([16, 22]).reverse(),
        ...arrayRange([46, 52]).reverse(),
        40,
        ...arrayRange([34, 40]),
        ...arrayRange([52, 58]).reverse(),
        58,
        ...arrayRange([64, 76]),
        ...arrayRange([76, 82]).reverse(),
    ],
};

export { BoardMap, BoardPath };