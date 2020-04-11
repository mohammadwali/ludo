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

const Container = styled(Box)`
    position: relative;
    height: 109px;
`;

const Block = (props) => {
    const { color, component: Component } = props;

    return (
        <Component color={color}>

        </Component>
    )
};

const FinishBlocks = (props) => {
    const { state: { colorsPos } } = useContext(GameContext);

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