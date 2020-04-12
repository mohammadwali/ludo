import React, { memo } from 'react';
import styled from 'styled-components';

import { TokenColorPos } from '../../../constant';

import HomeBox from './HomeBox';
import FinishBlocks from './FinishBlocks';
import PathBlocks from './PathBlocks';

import { FlexContainer } from '../../../components/styled';

const BoardContainer = styled(FlexContainer)`
    border-collapse: collapse;
    background: #fff;
    border: 4px solid #6665af;
`;

const Board = memo(() => {
    return (
        <BoardContainer>
            <FlexContainer>
                <div>
                    <HomeBox tokenColorPos={TokenColorPos.TOP_LEFT}/>
                    <PathBlocks tokenColorPos={TokenColorPos.TOP_LEFT}/>
                    <HomeBox tokenColorPos={TokenColorPos.BOTTOM_LEFT}/>
                </div>
                <div>
                    <PathBlocks tokenColorPos={TokenColorPos.TOP_RIGHT}/>
                    <FinishBlocks/>
                    <PathBlocks tokenColorPos={TokenColorPos.BOTTOM_LEFT}/>
                </div>
                <div>
                    <HomeBox tokenColorPos={TokenColorPos.TOP_RIGHT}/>
                    <PathBlocks tokenColorPos={TokenColorPos.BOTTOM_RIGHT}/>
                    <HomeBox tokenColorPos={TokenColorPos.BOTTOM_RIGHT}/>
                </div>
            </FlexContainer>
        </BoardContainer>
    );
});

export default Board;
