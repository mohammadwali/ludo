import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash/object';

import styled from 'styled-components';

import { Circle, TokenRow, TokenBlock, CenteredBox } from '../../../components/styled';
import { BoardConfig, ColorMap } from '../../../constant';

import { GameContext } from '../../../context/GameContext';
import { Token } from './Token';

const Container = styled(CenteredBox)`
    height: 217px;
    width: 217px;
    background-image: ${props => props.color ? `linear-gradient(
        152deg,
        ${ColorMap[props.color]} 33.33%, 
        #d1d1d1 33.33%, 
        #d1d1d1 50%, 
        ${ColorMap[props.color]} 50%, 
        ${ColorMap[props.color]} 83.33%, 
        #d1d1d1 83.33%,
        #d1d1d1 100%
    );` : 'none'};
    background-size: 6.39px 3.40px;
`;

const { map: boardMap } = BoardConfig;

const HomeBox = (props) => {
    const { pos } = props;
    const { state: { colorsPos } } = useContext(GameContext);
    const currentTokenColor = get(colorsPos, [pos]);
    const getTokenBlockPos = useCallback((index) => get(boardMap, [pos, 'tokens', index]), [boardMap]);

    return (
        <Container {...props} color={currentTokenColor}>
            <Circle color={currentTokenColor}>
                <TokenRow>
                    <TokenBlock>
                        <Token index={0}
                               pos={pos}
                               withPlaceholder
                               blockPos={getTokenBlockPos(0)}/>
                    </TokenBlock>
                    <TokenBlock>
                        <Token index={1}
                               pos={pos}
                               withPlaceholder
                               blockPos={getTokenBlockPos(1)}/>
                    </TokenBlock>
                </TokenRow>
                <TokenRow>
                    <TokenBlock>
                        <Token index={2}
                               pos={pos}
                               withPlaceholder
                               blockPos={getTokenBlockPos(2)}/>
                    </TokenBlock>
                    <TokenBlock>
                        <Token index={3}
                               pos={pos}
                               withPlaceholder
                               blockPos={getTokenBlockPos(3)}/>
                    </TokenBlock>
                </TokenRow>
            </Circle>
        </Container>
    );
};

HomeBox.propTypes = {
    pos: PropTypes.string.isRequired,
};

export default HomeBox;
