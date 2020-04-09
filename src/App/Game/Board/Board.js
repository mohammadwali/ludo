import React from 'react';
import styled from 'styled-components';

import { ColorName, Ranges } from '../../../constant';

import HomeBox from './HomeBox';
import FinishBlock from './FinishBlock';
import SquaresBlock from './SquaresBlock';

import { FlexContainer } from '../../../components/styled';

const BoardContainer = styled(FlexContainer)`
    border-collapse: collapse;
    background: #fff;
`;

const Board = (props) => {
    return (
        <BoardContainer>
            <FlexContainer>
                <div>
                    <HomeBox
                        color={ColorName.RED}
                        ranges={Ranges.Tokens[ColorName.RED]}
                    />
                    <SquaresBlock
                        color={ColorName.RED}
                        ranges={Ranges.Blocks[ColorName.RED]}
                        homeDirection={SquaresBlock.HomeDirection.TOP}
                    />
                    <HomeBox
                        color={ColorName.BLUE}
                        ranges={Ranges.Tokens[ColorName.BLUE]}
                    />
                </div>
                <div>
                    <SquaresBlock
                        color={ColorName.GREEN}
                        ranges={Ranges.Blocks[ColorName.GREEN]}
                        homeDirection={SquaresBlock.HomeDirection.RIGHT}
                    />
                    <FinishBlock/>
                    <SquaresBlock
                        color={ColorName.BLUE}
                        ranges={Ranges.Blocks[ColorName.BLUE]}
                        homeDirection={SquaresBlock.HomeDirection.LEFT}
                    />
                </div>
                <div>
                    <HomeBox
                        color={ColorName.GREEN}
                        ranges={Ranges.Tokens[ColorName.GREEN]}
                    />
                    <SquaresBlock
                        color={ColorName.YELLOW}
                        ranges={Ranges.Blocks[ColorName.YELLOW]}
                        homeDirection={SquaresBlock.HomeDirection.BOTTOM}
                    />
                    <HomeBox
                        color={ColorName.YELLOW}
                        ranges={Ranges.Tokens[ColorName.YELLOW]}
                    />
                </div>
            </FlexContainer>
        </BoardContainer>
    );
};

export default Board;
