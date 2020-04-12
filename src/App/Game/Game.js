import React, { useContext, useEffect, useRef } from 'react';

// import useAxios from 'axios-hooks';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import { FlexContainer } from '../../components/styled';
import { ColorName, DefaultDirection, DummyGameConfig } from '../../constant';
import { GameContext } from '../../context/GameContext';
import { UiSounds } from '../../UiSounds';
import { createColorPos } from '../../utils/boardHelper';

import { GameBody } from './GameBody';
import { GameLoader } from './GameLoader';

const GameContainer = styled(FlexContainer)`
    background-color: #1a1940;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 153, 212, 0) calc(15% + 100px),
        rgba(0, 99, 138, 0) calc(85% + 100px),
        rgba(0, 0, 0, 0.15) 100%
    );
`;

const Game = (props) => {
    // const { params: { id } } = props.match;
    const { state: { ready, die, activePlayer, lastDie }, setGame } = useContext(GameContext);
    const lastPlayer = useRef(activePlayer);

    // const [{ data }] = useAxios(
    //     id
    //     // { url: id, params: { 'mocky-delay': '3000ms' } },
    //     // { useCache: false },
    // );
    //
    // useEffect(() => {
    //     if (data) {
    //         setGame(data);
    //     }
    // }, [data, setGame]);


    useEffect(() => {
        const config = DummyGameConfig;
        const currentUser = config.players[2];
        const colorsPos = createColorPos(currentUser.colorName);
        const game = {
            ...config,
            colorsPos,
            players: config.players,
            activeBlock: DefaultDirection[0]
        };

        setGame(game);

        console.log('setting config....', game)
    }, [setGame]);


    return ready ? (
        <GameContainer fluid>
            <GameBody/>
        </GameContainer>
    ) : (
        <GameContainer fluid>
            <GameLoader/>
        </GameContainer>
    )
};

export default withRouter(Game);