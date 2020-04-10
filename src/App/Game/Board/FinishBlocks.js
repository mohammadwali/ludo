import React, { useContext } from 'react';
import styled from 'styled-components';

import {
    Box,
    TriangleBottom,
    TriangleLeft,
    TriangleRight,
    TriangleTop
} from '../../../components/styled';
import { TokenColorPos } from '../../../constant';
import { GameContext } from '../../../context/GameContext';
import { useBlockTokenRenderer } from '../../../hooks/useBlockTokenRenderer';

const Container = styled(Box)`
    position: relative;
    width: 108px;
    height: 108px;
`;

const Block = (props) => {
    const { color, component: Component } = props;
    const renderTokens = useBlockTokenRenderer(0);
    return (
        <Component color={color}>
            {renderTokens()}
        </Component>
    )
};

const FinishBlocks = (props) => {
    const color = 'red';
    const { state: { tokensPos, colorsPos } } = useContext(GameContext);

    return (
        <Container>
            <Block
                color={colorsPos[TokenColorPos.TOP_LEFT]}
                component={TriangleRight}/>
            <Block
                color={colorsPos[TokenColorPos.TOP_RIGHT]}
                component={TriangleBottom}/>
            <Block
                color={colorsPos[TokenColorPos.BOTTOM_RIGHT]}
                component={TriangleLeft}/>
            <Block
                color={colorsPos[TokenColorPos.BOTTOM_LEFT]}
                component={TriangleTop}/>
        </Container>
    )
};


FinishBlocks.propTypes = {};


export default FinishBlocks;