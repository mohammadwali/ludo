import React from 'react';
import PropTypes from 'prop-types';
import ReactDice from 'react-dice-complete';
import { ColorMap } from '../../constant';

const Dice = (props) => {
    const { player, color } = props;

    return (
        <ReactDice
            margin={0}
            rollTime={1}
            numDice={1}
            faceColor={'#fff'}
            outlineColor={'#ddd'}
            dotColor={color}
            rollDone={(...args) => console.log('done', args)}
            ref={dice => console.log(dice)}
        />
    );
};

Dice.propTypes = {
    player: PropTypes.object.isRequired
};

export default Dice;