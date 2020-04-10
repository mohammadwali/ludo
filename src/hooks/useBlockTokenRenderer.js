import React, { useCallback, useContext } from 'react';
import { get } from 'lodash/object';

import { Token } from '../components/styled';
import { GameContext } from '../context/GameContext';
import { findTokensByBlockPosition } from '../utils/findTokensByBlockPosition';

export const useBlockTokenRenderer = (currentTokenPos) => {
    const { state: { tokensPos, colorsPos } } = useContext(GameContext);
    const tokens = findTokensByBlockPosition(currentTokenPos, tokensPos);

    return useCallback(() => tokens.map(({ tokenColorPos, tokenIndex }) => {
        if (get(tokensPos, [tokenColorPos, tokenIndex]) === currentTokenPos) {
            return (
                <Token
                    count={tokens.length}
                    key={tokenIndex + tokenColorPos}
                    color={colorsPos[tokenColorPos]}/>
            );
        }
        return null;
    }), [tokens, tokensPos, currentTokenPos, colorsPos]);
};