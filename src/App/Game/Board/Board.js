import React from 'react';
import styled from 'styled-components';

import { TokenColorPos } from '../../../constant';

import HomeBox from './HomeBox';
import FinishBlocks from './FinishBlocks';
import SquaresBlock from './SquaresBlock';

import { FlexContainer } from '../../../components/styled';

const BoardContainer = styled(FlexContainer)`
    border-collapse: collapse;
    background: #fff;
`;

const Board = () => {
    return (
        <BoardContainer>
            <FlexContainer>
                <div>
                    <HomeBox pos={TokenColorPos.TOP_LEFT}/>
                    <SquaresBlock pos={TokenColorPos.TOP_LEFT}/>
                    <HomeBox pos={TokenColorPos.BOTTOM_LEFT}/>
                </div>
                <div>
                    <SquaresBlock pos={TokenColorPos.TOP_RIGHT}/>
                    <FinishBlocks/>
                    <SquaresBlock pos={TokenColorPos.BOTTOM_LEFT}/>
                </div>
                <div>
                    <HomeBox pos={TokenColorPos.TOP_RIGHT}/>
                    <SquaresBlock pos={TokenColorPos.BOTTOM_RIGHT}/>
                    <HomeBox pos={TokenColorPos.BOTTOM_RIGHT}/>
                </div>
            </FlexContainer>
        </BoardContainer>
    );
};

export default Board;
