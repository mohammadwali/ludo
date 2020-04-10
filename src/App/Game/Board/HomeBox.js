import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash/object';

import styled from 'styled-components';

import {
    Circle,
    Token,
    TokenRow,
    TokenBlock,
    TokenPlaceHolder,
    CenteredBox
} from '../../../components/styled';
import { BoardConfig } from '../../../constant';

import { GameContext } from '../../../context/GameContext';

const Container = styled(CenteredBox)`
    height: 215px;
    width: 215px;
`;

const { map: boardMap } = BoardConfig;

const HomeBox = (props) => {
    const { pos } = props;
    const { state: { tokensPos, colorsPos } } = useContext(GameContext);

    const currentTokenColor = get(colorsPos, [pos]);

    const renderTokenOnPosition = useCallback((index) => {
        const tokenBlockPosition = get(boardMap, [pos, 'tokens', index]);
        const currentTokenPosition = get(tokensPos, [pos, index], null);

        if (currentTokenPosition === tokenBlockPosition) {
            return (
                <Token color={currentTokenColor}/>
            );
        }
        return (
            <TokenPlaceHolder/>
        );
    }, [boardMap, pos, tokensPos, currentTokenColor]);

    return (
        <Container {...props}>
            <Circle color={currentTokenColor}>
                <TokenRow>
                    <TokenBlock>{renderTokenOnPosition(0)}</TokenBlock>
                    <TokenBlock>{renderTokenOnPosition(1)}</TokenBlock>
                </TokenRow>
                <TokenRow>
                    <TokenBlock>{renderTokenOnPosition(2)}</TokenBlock>
                    <TokenBlock>{renderTokenOnPosition(3)}</TokenBlock>
                </TokenRow>
            </Circle>
        </Container>
    );
};

HomeBox.propTypes = {
    pos: PropTypes.string.isRequired,
};

export default HomeBox;
