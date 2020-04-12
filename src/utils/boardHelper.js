import reduce from 'lodash/reduce';
import { BoardPath, BoardMap } from '../config/game/board';
import { ColorName, DefaultDirection, TokenColorPos } from '../constant';

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

export const createColorPos = (currentUserColor) => {
    const colors = Object.values(ColorName)
        .filter((color) => color !== currentUserColor);
    const colorPos = Object.values(TokenColorPos)
        .filter((pos) => pos !== TokenColorPos.BOTTOM_LEFT);

    return reduce(
        colorPos,
        (result, pos, index) => ({ ...result, [pos]: colors[index] }),
        { [TokenColorPos.BOTTOM_LEFT]: currentUserColor, }
    );
};

/**
 * Return's the next TokenColorPos following the DefaultDirection in constants
 * basically who is gonna grab dice next
 *  */
export const getNextBlockPos = (activeBlock) => {
    const lastIndex = DefaultDirection.length - 1;
    const currentIndex = DefaultDirection.indexOf(activeBlock);
    const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    return DefaultDirection[nextIndex];
};