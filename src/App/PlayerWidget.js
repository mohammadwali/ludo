import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import 'react-dice-complete/dist/react-dice-complete.css'
import { Card, FlexContainer } from '../components/styled';
import { ColorMap } from '../constant';

import { InlineIcon } from '@iconify/react';
import bxAward from '@iconify/icons-bx/bx-award';
import IconCoins from '@iconify/icons-vaadin/coin-piles';
import IconMicrophoneOn from '@iconify/icons-bx/bxs-microphone';
import IconMicrophoneOff from '@iconify/icons-bx/bxs-microphone-off';
import Dice from './Dice';

const Container = styled(Card)`
    width: 230px;
    min-height: 78px;
    flex-direction: ${props => props.placement};
    background: ${props => ColorMap[props.color]};
`;

const DiceContainer = styled.div`
    flex: .35;
    padding: .5em;
    background: rgba(0, 0, 0, .4);
    border-radius-right: 50%;
    
    & .die span.dot{
        width: 12px !important;
        height: 12px !important;
        top: 42px;
    }
`;

const PlayerBlockContainer = styled(FlexContainer)`
    flex: 1;
    padding: .5em;
    flex-direction: column;
    justify-content: space-around;
`;

const AvatarImage = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 4px solid rgba(0, 0, 0, .4);
`;

const PlayerAvatar = styled(FlexContainer)`
    margin-right: .5em;
`;

const PlayerTitle = styled.div`
    padding: 0;
    color: rgba(0, 0, 0, .65);
    font-weight: bold;
    width: 100%;
    font-size: 1em;
`;

const Row = styled(FlexContainer)`
    justify-content: ${props => props.justify};
`;

const IconContainer = styled(FlexContainer)`
    margin: 0 0 0 .3em;
    
    &:first-child {
        margin: 0
    }
`;

const Icon = styled(InlineIcon)`
    font-size: 1.2em;
`;

const IconLabel = styled.span`
    margin-left: ${props => props.margin ? '.25em' : ''}
`;

const PlayerMicrophoneIcon = styled(FlexContainer)`
    margin-left: .25em;
`;

const Placement = {
    LEFT: 'row',
    RIGHT: 'row-reverse'
};

const DiceBlock = (props) => {
    const { activePlayer, player } = props;

    return (
        <DiceContainer>
            {activePlayer.id === player.id && (<Dice player={player}/>)}
        </DiceContainer>
    );
};

const PlayerBlock = (props) => {
    const { player } = props;
    const microphoneIcon = player.isMicrophoneEnabled ? IconMicrophoneOn : IconMicrophoneOff;
    return (
        <PlayerBlockContainer>
            <Row>
                <PlayerAvatar centered>
                    <AvatarImage
                        alt={'player-image'}
                        src={player.avatar.url}
                    />
                </PlayerAvatar>
                <FlexContainer centered>
                    <PlayerTitle>
                        {player.name}
                    </PlayerTitle>
                </FlexContainer>
                <PlayerMicrophoneIcon centered>
                    <Icon icon={microphoneIcon}/>
                </PlayerMicrophoneIcon>
            </Row>

            <Row justify={'space-around'}>
                <IconContainer>
                    <Icon icon={bxAward}/>
                    <IconLabel>500</IconLabel>
                </IconContainer>
                <IconContainer>
                    <Icon icon={IconCoins}/>
                    <IconLabel margin>2000</IconLabel>
                </IconContainer>
            </Row>

        </PlayerBlockContainer>
    );
};


const PlayerWidget = (props) => {
    const { placement, player: { color } } = props;
    return (
        <Container
            color={color}
            placement={placement}>
            <PlayerBlock {...props}/>
            <DiceBlock {...props}/>
        </Container>
    )
};

PlayerWidget.Placement = Placement;

PlayerWidget.propTypes = {
    player: PropTypes.object,
    activePlayer: PropTypes.object,
    placement: PropTypes.string,
};

export default PlayerWidget;