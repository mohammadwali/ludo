import React, { useCallback, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import ReactDice from 'react-dice-complete';

import { FlexContainer } from '../../components/styled';
import { GameContext } from '../../context/GameContext';

import { UiSounds } from '../../UiSounds';

import { useTokenStepper } from '../../hooks/useTokenStepper';
import { getTokensIndexesInPath } from '../../utils/boardHelper';

const DiceContainer = memo(
    (props) => {
        const { handleRollDone, color } = props;

        return (
            <FlexContainer onClick={() => UiSounds.dice.play()}>
                <ReactDice
                    margin={0}
                    rollTime={1}
                    numDice={1}
                    faceColor={'#fff'}
                    outlineColor={'#ddd'}
                    dotColor={color}
                    rollDone={handleRollDone}
                />
            </FlexContainer>
        )
    },
    (prev, current) => (
        prev.color === current.color
    )
);

const Dice = (props) => {
    const { color, pos: tokenColorPos } = props;
    const { stepper } = useTokenStepper(tokenColorPos);

    const {
        setDie,
        setActiveBlock,
        switchToNextBlock,
        state: { tokensPos },
    } = useContext(GameContext);

    const handleRollDone = useCallback((die) => {
        const tokenIndexesInPath = getTokensIndexesInPath(tokenColorPos, tokensPos[tokenColorPos]);

        if (die === 6 || tokenIndexesInPath.length) {
            const shouldAutoStep = (
                tokenIndexesInPath.length === 1 && die !== 6
            );

            setDie({ die });
            setActiveBlock({ block: tokenColorPos });

            if (shouldAutoStep) {
                stepper(die, tokenIndexesInPath[0]);
            }

        } else {
            //adding delay to finish dice animation
            setTimeout(() => {
                switchToNextBlock();
                UiSounds.playerSwitched.play();
            }, 500);
        }
    }, [switchToNextBlock, setActiveBlock, setDie, stepper, tokenColorPos, tokensPos]);

    return (
        <DiceContainer
            color={color}
            handleRollDone={handleRollDone}/>
    );
};


Dice.propTypes = {
    pos: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Dice;