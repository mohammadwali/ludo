import { BoardPath, BoardMap } from '../config/game/board';

export const findTokensInPath = (colorPos, tokensList) => {
    return tokensList.filter((tokenPos) => isTokenInPath(colorPos, tokenPos));
};

export const isAnyTokenInPath = (colorPos, tokensList) => {
    return tokensList.some((tokenPos) => isTokenInPath(colorPos, tokenPos));
};

export const getTokensIndexesInPath = (colorPos, tokensList) => {
    return tokensList.reduce((indexes, tokenPos, index) => {
        return isTokenInPath(colorPos, tokenPos) ? indexes.concat(index) : indexes;
    }, []);
};

export const getNextStepPath = (tokenColorPos, tokenIndexInPath, step) => {
    const path = BoardPath[tokenColorPos];
    const startIndex = tokenIndexInPath + 1;
    const endIndex = startIndex + step;
    return path.slice(startIndex, endIndex);
};

export const getTokenIndexInPath = (colorPos, tokenPos) => {
    return BoardPath[colorPos].indexOf(tokenPos);
};

export const isTokenInPath = (colorPos, tokenPos) => {
    return BoardPath[colorPos].includes(tokenPos);
};

export const isSafeSpot = (tokenPos) => {
    return BoardMap.safeSpots.includes(tokenPos);
};