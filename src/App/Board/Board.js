import React from 'react';
import styled from 'styled-components'
import { Box } from '../../components/styled';
import { ColorMap } from '../../constant';
import FinishBlock from './FinishBlock';
import HomeBox from './HomeBox';
import SquaresBlock from './SquaresBlock';

const BoardContainer = styled(Box)`
    margin: 1em auto;
    width: 540px;
    height: 540px;
    border-collapse: collapse;
`;

const Board = (props) => {
    const {} = props;

    return (
        <BoardContainer>
            <div>
                <HomeBox color={ColorMap.RED}/>
                <SquaresBlock
                    color={ColorMap.RED}
                    homePosition={SquaresBlock.HomePosition.TOP}
                />
                <HomeBox color={ColorMap.BLUE}/>
            </div>
            <div>
                <SquaresBlock
                    color={ColorMap.GREEN}
                    homePosition={SquaresBlock.HomePosition.RIGHT}
                />
                <FinishBlock/>
                <SquaresBlock
                    color={ColorMap.BLUE}
                    homePosition={SquaresBlock.HomePosition.LEFT}
                />
            </div>
            <div>
                <HomeBox color={ColorMap.GREEN}/>
                <SquaresBlock
                    color={ColorMap.YELLOW}
                    homePosition={SquaresBlock.HomePosition.BOTTOM}
                />
                <HomeBox color={ColorMap.YELLOW}/>
            </div>
        </BoardContainer>
    );
};

export default Board;
