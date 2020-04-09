import React, { useState } from 'react';
import styled from 'styled-components';

import { ColorName, Ranges } from '../../constant';
import { arrayRange } from '../../utils/range';

import HomeBox from './HomeBox';
import FinishBlock from './FinishBlock';
import SquaresBlock from './SquaresBlock';

import { Box } from '../../components/styled';

const BoardContainer = styled(Box)`
    width: 540px;
    height: 540px;
    border-collapse: collapse;
    background: #fff;
`;

const Layer = styled.div`
   display: flex;
`;

const Board = (props) => {
    return (
        <BoardContainer>
            <Layer>
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
            </Layer>
        </BoardContainer>
    );
};

export default Board;
