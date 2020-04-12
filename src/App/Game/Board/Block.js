import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Square } from '../../../components/styled';
import { BoardMap } from '../../../config/game/board';
import { GameContext } from '../../../context/GameContext';
import { BlockTokens } from './BlockTokens';

const Block = (props) => {
    const { blockPos, tokenColorPos } = props;
    const { state: { colorsPos } } = useContext(GameContext);
    const { [tokenColorPos]: { homeBlocks, lastPathBlock }, safeSpots } = BoardMap;
    return (
        <Square
            key={blockPos + tokenColorPos}
            hasStar={safeSpots.includes(blockPos)}
            hasArrow={lastPathBlock === blockPos}
            color={homeBlocks.includes(blockPos) ? colorsPos[tokenColorPos] : 'none'}>
            {/*{currentTokenPos}*/}
            <BlockTokens currentTokenPos={blockPos}/>
        </Square>
    )
};

Block.propTypes = {
    blockPos: PropTypes.number.isRequired,
    tokenColorPos: PropTypes.string.isRequired,
};

export default Block;