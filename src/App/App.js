import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { GameProvider } from '../context/GameContext';

import Game from './Game/Game';
import { FlexContainer } from '../components/styled';

function App() {
    return (
        <FlexContainer fluid>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/game/5e909789330000dcb727d8ef"/>
                </Route>

                <Route path={`/game/:id`}>
                    <GameProvider>
                        <Game/>
                    </GameProvider>
                </Route>

                <Route path="*">
                    <h1>The page you are looking for doesn't exist!</h1>
                </Route>
            </Switch>
        </FlexContainer>
    );
}

export default App;
