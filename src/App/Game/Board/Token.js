import React, { useContext, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash/object';

import { GameContext } from '../../../context/GameContext';
import { TokenItem, TokenItemPlaceHolder } from '../../../components/styled';
import { useTokenStepper } from '../../../hooks/useTokenStepper';


const Token = memo((props) => {
    const { tokenColorPos, index, withPlaceholder, blockPos, ...rest } = props;
    const { state: { tokensPos, colorsPos, die, currentBlock }, resetDie } = useContext(GameContext);

    const currentTokenColor = get(colorsPos, [tokenColorPos]);
    const currentTokenPosition = get(tokensPos, [tokenColorPos, index], null);
    const { stepper } = useTokenStepper(tokenColorPos);

    const handleClick = () => {
        if (tokenColorPos === currentBlock && die !== -1) {
            stepper(die, index, () => {
                resetDie({ resetHistory: die !== 6 });
            });
        }
    };

    if (currentTokenPosition === blockPos) {
        return (
            <TokenItem
                {...rest}
                onClick={handleClick}
                color={currentTokenColor}/>
        );
    }
    return withPlaceholder ? (
        <TokenItemPlaceHolder/>
    ) : null;
});

Token.defaultProps = {
    withPlaceholder: false,
};

Token.propTypes = {
    tokenColorPos: PropTypes.string.isRequired
};

export default Token;