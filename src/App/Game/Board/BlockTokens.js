import React, { useContext } from 'react';
import { get } from 'lodash/object';
import { PopIn } from 'react-spring-pop';
import { Token } from './Token';

import { GameContext } from '../../../context/GameContext';
import { findTokensByBlockPosition } from '../../../utils/findTokensByBlockPosition';

export const BlockTokens = ({ currentTokenPos }) => {
    const { state: { tokensPos, colorsPos } } = useContext(GameContext);
    const tokens = findTokensByBlockPosition(currentTokenPos, tokensPos);

    return (
        <>
            {tokens.reduce((result, { tokenColorPos, tokenIndex }) => {
                if (get(tokensPos, [tokenColorPos, tokenIndex]) === currentTokenPos) {
                    return result.concat(
                        <PopIn
                            key={tokenIndex + tokenColorPos}>
                            <Token
                                pos={tokenColorPos}
                                index={tokenIndex}
                                count={tokens.length}
                                blockPos={currentTokenPos}
                                color={colorsPos[tokenColorPos]}/>
                        </PopIn>
                    );
                }
                return result;
            }, [])}
        </>
    );
};