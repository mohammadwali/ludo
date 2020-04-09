import React from 'react';
import styled from 'styled-components';

import Game from './Game/Game';

// eslint-disable-next-line no-undef
const AppContainer = styled.div`
    display:flex;
    flex-direction: column;
    border: none;
    width: 542px;
    margin: 1em auto 0;
`;

function App() {
    return (
        <AppContainer>
            <Game/>
        </AppContainer>
    );
}

export default App;
