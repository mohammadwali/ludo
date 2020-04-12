import React, { useContext } from 'react';
import { get } from 'lodash/object';
// import { PopIn } from 'react-spring-pop';
import Token from './Token';
import { Animated } from 'react-animated-css';
import 'animate.css/animate.css';

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
                        <Animated
                            animationIn={'bounceIn'}
                            animationInDuration={500}
                            key={tokenIndex + tokenColorPos}>
                            <Token
                                index={tokenIndex}
                                count={tokens.length}
                                blockPos={currentTokenPos}
                                tokenColorPos={tokenColorPos}
                                color={colorsPos[tokenColorPos]}/>
                        </Animated>
                    );
                }
                return result;
            }, [])}
        </>
    );
};