import React, { useCallback } from 'react';
import { get } from 'lodash/object';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Square, Token } from '../../../components/styled';
import { Ranges } from '../../../constant';
import { useGameState } from '../../../hooks/useGameState';
import { findTokensByBlockPosition } from '../../../utils/findTokensByBlockPosition';

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
`;

const Row = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
`;

const { SafeSpots, SafeColorSpots } = Ranges;

const HomeDirection = {
    TOP: 'top',
    LEFT: 'left',
    RIGHT: 'right',
    BOTTOM: 'bottom',
};

const getFlexDirectionByHomeDirection = (direction) => {
    return (direction === HomeDirection.TOP || direction === HomeDirection.BOTTOM) ?
        { containerDirection: 'column', rowDirection: 'row' } :
        { containerDirection: 'row', rowDirection: 'column' };
};

const SquareBlock = (props) => {
    const [state] = useGameState();
    const { color, pos } = props;
    const tokens = findTokensByBlockPosition(pos, state.board.tokenPosition);

    const renderTokens = useCallback(() => tokens.map(({ tokenColor, tokenIndex }) => {
        if (get(state, ['board', 'tokenPosition', tokenColor, tokenIndex]) === pos) {
            return <Token key={tokenIndex + tokenColor} color={tokenColor} count={tokens.length}/>;
        }
        return null;
    }), [pos, state, tokens]);

    return (
        <Square
            key={pos}
            color={SafeColorSpots[color].includes(pos) ? color : 'none'}
            hasStar={SafeSpots.includes(pos)}>
            {renderTokens()}
        </Square>
    )
};

const SquaresBlock = (props) => {
    const { homeDirection, ranges } = props;
    const { containerDirection, rowDirection } = getFlexDirectionByHomeDirection(homeDirection);

    return (
        <Container direction={containerDirection}>
            {ranges.map((row, index) => (
                <Row key={index} direction={rowDirection}>
                    {row.map((pos) => <SquareBlock key={pos} {...props} pos={pos}/>)}
                </Row>
            ))}
        </Container>
    );
};

SquaresBlock.propTypes = {
    color: PropTypes.string.isRequired,
    homeDirection: PropTypes.string,
    ranges: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
};

SquaresBlock.HomeDirection = HomeDirection;

export default SquaresBlock;