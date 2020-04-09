import React from 'react';
import styled from 'styled-components';
import { CenteredBox } from '../components/styled';
import Board from './Board/Board';

const AppContainer = styled(CenteredBox)`
    height: 100%;
    border: none;
`;

function App() {
    return (
        <AppContainer withoutBorder>
            <Board/>
        </AppContainer>
    );
}

export default App;
