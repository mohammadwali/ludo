import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import ReactDice from 'react-dice-complete';
import { GameContext } from '../../context/GameContext';

const Dice = (props) => {
    const { color, pos } = props;
    const { setDie, setActiveBlock } = useContext(GameContext);
    const handleRollDone = (die) => {
        setDie({ die });
        setActiveBlock({ block: pos })
    };

    return (
        <ReactDice
            margin={0}
            rollTime={1}
            numDice={1}
            faceColor={'#fff'}
            outlineColor={'#ddd'}
            dotColor={color}
            rollDone={handleRollDone}
        />
    );
};

Dice.propTypes = {
    pos: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Dice;