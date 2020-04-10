import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FlexContainer, Square } from '../../../components/styled';
import { BoardConfig, BoardMap, TokenColorPos } from '../../../constant';
import { GameContext } from '../../../context/GameContext';
import { useBlockTokenRenderer } from '../../../hooks/useBlockTokenRenderer';

const getFlexDirection = (pos) => {
    return (pos === TokenColorPos.TOP_RIGHT || pos === TokenColorPos.BOTTOM_LEFT) ?
        { containerDirection: 'row', rowDirection: 'column' } :
        { containerDirection: 'column', rowDirection: 'row' };
};

const SquareBlock = (props) => {
    const { color, currentTokenPos, applyColor, applyStar } = props;
    const renderTokens = useBlockTokenRenderer(currentTokenPos);

    return (
        <Square
            key={currentTokenPos}
            color={applyColor ? color : 'none'}
            hasStar={applyStar}>
            {renderTokens()}
            {/*{currentTokenPos}*/}
        </Square>
    )
};

const { map: { safeSpots }, map } = BoardConfig;

const SquaresBlock = (props) => {
    const { pos } = props;
    const { containerDirection, rowDirection } = getFlexDirection(pos);
    const { state: { colorsPos } } = useContext(GameContext);
    const { [pos]: { block: ranges, finishRange, homeBlock } } = map;

    return (
        <FlexContainer direction={containerDirection}>
            {ranges.map((row, index) => (
                <FlexContainer key={index} direction={rowDirection}>
                    {row.map((tokenPos) => (
                        <SquareBlock
                            key={tokenPos}
                            color={colorsPos[pos]}
                            applyStar={safeSpots.includes(tokenPos)}
                            applyColor={finishRange.includes(tokenPos) || homeBlock === tokenPos}
                            currentTokenPos={tokenPos}/>
                    ))}
                </FlexContainer>
            ))}
        </FlexContainer>
    );
};

SquaresBlock.propTypes = {
    pos: PropTypes.string
};

export default SquaresBlock;