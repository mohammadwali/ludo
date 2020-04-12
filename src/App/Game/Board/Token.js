import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash/object';

import { GameContext } from '../../../context/GameContext';
import { TokenItem, TokenItemPlaceHolder } from '../../../components/styled';
import { useTokenStepper } from '../../../hooks/useTokenStepper';


const Token = memo((props) => {
    const { tokenColorPos, index, withPlaceholder, blockPos, ...rest } = props;
    const { state: { tokensPos, colorsPos, die, activeBlock } } = useContext(GameContext);

    const currentTokenColor = get(colorsPos, [tokenColorPos]);
    const currentTokenPosition = get(tokensPos, [tokenColorPos, index], null);
    const { stepper } = useTokenStepper(tokenColorPos);

    if (currentTokenPosition === blockPos) {
        return (
            <TokenItem
                {...rest}
                onClick={() => tokenColorPos === activeBlock && stepper(die, index)}
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