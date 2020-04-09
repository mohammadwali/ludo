import React from 'react';
import styled from 'styled-components';

import {
    Box,
    TriangleBottom,
    TriangleLeft,
    TriangleRight,
    TriangleTop
} from '../../../components/styled';

const Container = styled(Box)`
    position: relative;
    width: 108px;
    height: 108px;
`;

const FinishBlock = (props) => {
    return (
        <Container>
            <TriangleRight/>
            <TriangleBottom/>
            <TriangleLeft/>
            <TriangleTop/>
        </Container>
    )
};


FinishBlock.propTypes = {};


export default FinishBlock;