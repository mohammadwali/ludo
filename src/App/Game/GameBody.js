import bxAward from '@iconify/icons-bx/bx-award';
import { InlineIcon } from '@iconify/react';
import React, { useContext } from 'react';
import styled from 'styled-components';
import CopyrightNotice from '../../components/CopyrightNotice';
import MicrophoneIcon from '../../components/MicrophoneIcon';
import { FlexContainer, FloatingButton } from '../../components/styled';
import { TokenColorPos } from '../../constant';
import { GameContext } from '../../context/GameContext';
import Board from './Board/Board';
import PlayerWidget from './PlayerWidget';

const GameWrapper = styled(FlexContainer)`
    margin: 1em auto 0;
`;

const Row = styled(FlexContainer)`
    width: 100%;
    justify-content: space-between;
    margin: ${props => props.margin};
    position: relative;
`;

const PrizeTitleHeading = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: .25em;
    color: #a7a7a7;
    
    &:last-child {
        margin-right: 0;
    }
`;

const PrizeTitle = (props) => {
    const { first, second } = props;

    return (
        <FlexContainer centered>
            <PrizeTitleHeading>
                <InlineIcon icon={bxAward} width={40}/>
                <span>Prizes:</span>
            </PrizeTitleHeading>
            <PrizeTitleHeading>
                <span>1st winner - {first} coins,</span>
            </PrizeTitleHeading>
            <PrizeTitleHeading>
                <span> 2nd winner- {second} coins</span>
            </PrizeTitleHeading>
        </FlexContainer>
    )
};

export const GameBody = (props) => {
    const { state: { players } } = useContext(GameContext);

    return (
        <GameWrapper direction={'column'}>
            <PrizeTitle first={500} second={250}/>
            <Row margin={'0 0 .3em'}>
                <PlayerWidget
                    player={players[2]}
                    pos={TokenColorPos.TOP_LEFT}
                />
                <PlayerWidget
                    pos={TokenColorPos.TOP_RIGHT}
                    player={players[3]}
                />
            </Row>
            <Board/>
            <Row margin={'.3em 0 0'}>
                <PlayerWidget
                    pos={TokenColorPos.BOTTOM_LEFT}
                    player={players[0]}
                />
                <PlayerWidget
                    pos={TokenColorPos.BOTTOM_RIGHT}
                    player={players[1]}/>
            </Row>
            <CopyrightNotice/>
            <FloatingButton>
                <MicrophoneIcon
                    width={30}
                    isEnabled={false}/>
            </FloatingButton>
        </GameWrapper>
    );
};