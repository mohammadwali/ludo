import React, { useContext } from 'react';
import { get } from 'lodash/object';
import styled from 'styled-components';
import Token from './Token';

import { Animated } from 'react-animated-css';
import 'animate.css/animate.css';

import { GameContext } from '../../../context/GameContext';
import { findTokensByBlockPosition } from '../../../utils/findTokensByBlockPosition';

const BlockTokenWrapper = styled(Animated)`
    position: absolute;
`;

export const BlockTokens = ({ currentTokenPos }) => {
    const { state: { tokensPos, colorsPos } } = useContext(GameContext);
    const tokens = findTokensByBlockPosition(currentTokenPos, tokensPos);

    return (
        <>
            {tokens.reduce((result, { tokenColorPos, tokenIndex }) => {
                if (get(tokensPos, [tokenColorPos, tokenIndex]) === currentTokenPos) {
                    return result.concat(
                        <BlockTokenWrapper
                            animationIn={'bounceIn'}
                            animationInDuration={500}
                            key={tokenIndex + tokenColorPos}>
                            <Token
                                index={tokenIndex}
                                blockPos={currentTokenPos}
                                tokenColorPos={tokenColorPos}
                                color={colorsPos[tokenColorPos]}/>
                        </BlockTokenWrapper>
                    );
                }
                return result;
            }, [])}
        </>
    );
};