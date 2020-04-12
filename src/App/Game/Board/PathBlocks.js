import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer, SquareWrapper } from '../../../components/styled';
import { BoardMap } from '../../../config/game/board';
import { TokenColorPos } from '../../../constant';

import Block from './Block';

const getFlexDirection = (pos) => {
    return (pos === TokenColorPos.TOP_RIGHT || pos === TokenColorPos.BOTTOM_LEFT) ?
        { containerDirection: 'row', rowDirection: 'column' } :
        { containerDirection: 'column', rowDirection: 'row' };
};

const PathBlocks = (props) => {
    const { tokenColorPos } = props;
    const { containerDirection, rowDirection } = getFlexDirection(tokenColorPos);
    const { [tokenColorPos]: { block: ranges } } = BoardMap;

    return (
        <SquareWrapper direction={containerDirection}>
            {ranges.map((row, index) => (
                <FlexContainer key={index} direction={rowDirection}>
                    {row.map((tokenPos) => (
                        <Block
                            tokenPos={tokenPos}
                            key={tokenColorPos + tokenPos}
                            tokenColorPos={tokenColorPos}
                            currentTokenPos={tokenPos}/>
                    ))}
                </FlexContainer>
            ))}
        </SquareWrapper>
    );
};

PathBlocks.propTypes = {
    tokenColorPos: PropTypes.string
};

export default PathBlocks;