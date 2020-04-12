import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Square } from '../../../components/styled';
import { BoardMap } from '../../../config/game/board';
import { GameContext } from '../../../context/GameContext';
import { BlockTokens } from './BlockTokens';

const Block = (props) => {
    const { currentTokenPos, tokenPos, tokenColorPos } = props;
    const { state: { colorsPos } } = useContext(GameContext);
    const { [tokenColorPos]: { homeBlocks }, safeSpots } = BoardMap;
    return (
        <Square
            key={tokenPos + tokenColorPos}
            hasStar={safeSpots.includes(tokenPos)}
            color={homeBlocks.includes(tokenPos) ? colorsPos[tokenColorPos] : 'none'}>
            {/*{currentTokenPos}*/}
            <BlockTokens currentTokenPos={currentTokenPos}/>
        </Square>
    )
};

Block.propTypes = {
    tokenPos: PropTypes.number.isRequired,
    tokenColorPos: PropTypes.string.isRequired,
    currentTokenPos: PropTypes.number.isRequired
};

export default Block;