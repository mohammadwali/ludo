import React from 'react';
import styled from 'styled-components';

import { useGameState } from '../hooks/useGameState';
import Board from './Board/Board';
import PlayerWidget from './PlayerWidget';

// eslint-disable-next-line no-undef
const AppContainer = styled.div`
    display:flex;
    flex-direction: column;
    border: none;
    width: 542px;
    margin: 100px auto;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: ${props => props.margin};
`;

function App() {
    const [state] = useGameState();
    const { players } = state;
    return (
        <AppContainer>
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
        </AppContainer>
    );
}

export default App;
