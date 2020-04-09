import Icon, { InlineIcon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';

import bxAward from '@iconify/icons-bx/bx-award';
import { MicrophoneIcon } from '../components/MicrophoneIcon';

import Board from './Board/Board';
import PlayerWidget from './PlayerWidget';
import { FlexContainer, FloatingButton } from '../components/styled';
import { useGameState } from '../hooks/useGameState';

// eslint-disable-next-line no-undef
const AppContainer = styled.div`
    display:flex;
    flex-direction: column;
    border: none;
    width: 542px;
    margin: 1em auto 0;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: ${props => props.margin};
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


function App() {
    const [state] = useGameState();
    const { players } = state;
    return (
        <AppContainer>
            <PrizeTitle first={500} second={250}/>
            <Row margin={'0 0 .3em'}>
                <PlayerWidget
                    placement={PlayerWidget.Placement.LEFT}
                    activePlayer={{ id: 2 }}
                    player={players[0]}/>
                <PlayerWidget
                    placement={PlayerWidget.Placement.RIGHT}
                    activePlayer={{ id: 2 }}
                    player={players[1]}/>
            </Row>
            <Board/>
            <Row margin={'.3em 0 0'}>
                <PlayerWidget
                    placement={PlayerWidget.Placement.LEFT}
                    activePlayer={{ id: 2 }}
                    player={players[2]}/>
                <PlayerWidget
                    placement={PlayerWidget.Placement.RIGHT}
                    activePlayer={{ id: 2 }}
                    player={players[3]}/>
            </Row>
            <FloatingButton>
                <MicrophoneIcon isEnabled={false} width={30}/>
            </FloatingButton>
        </AppContainer>
    );
}

export default App;
