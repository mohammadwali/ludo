import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

import 'react-dice-complete/dist/react-dice-complete.css'
import MicrophoneIcon from '../../components/MicrophoneIcon';
import { Card, FlexContainer, DiceContainer, createPulseAnimation, HorizontalArrow } from '../../components/styled';
import { ColorMap, TokenColorPos } from '../../constant';

import { InlineIcon } from '@iconify/react';
import bxAward from '@iconify/icons-bx/bx-award';
import IconCoins from '@iconify/icons-vaadin/coin-piles';
import { GameContext } from '../../context/GameContext';

import Dice from './Dice';

const Container = styled(Card)`
    width: 230px;
    min-height: 78px;
    background: ${props => ColorMap[props.color]};
    animation-name: ${props => props.active ? createPulseAnimation(ColorMap[props.color]) : 'none'};
    animation-duration: .9s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
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

const PlayerTitle = styled(FlexContainer)`
    padding: 0;
    color: rgba(0, 0, 0, .65);
    font-weight: bold;
    width: 100%;
    font-size: 1em;
    flex: 1;
    align-items: center;
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

const FlexDirection = {
    left: 'row',
    right: 'row-reverse',
};

const Placement = {
    [TokenColorPos.TOP_LEFT]: 'left',
    [TokenColorPos.BOTTOM_LEFT]: 'left',

    [TokenColorPos.TOP_RIGHT]: 'right',
    [TokenColorPos.BOTTOM_RIGHT]: 'right',
};

const DiceBlock = (props) => {
    const { pos, color } = props;
    const { state: { currentBlock } } = useContext(GameContext);
    return (
        <DiceContainer>
            {currentBlock === pos && (
                <Dice pos={pos}
                      color={color}/>
            )}
        </DiceContainer>
    );
};

const PlayerBlock = (props) => {
    const { player } = props;
    return (
        <PlayerBlockContainer>
            <Row>
                <PlayerAvatar centered>
                    <AvatarImage
                        alt={'player-image'}
                        src={player.avatar.url}
                    />
                </PlayerAvatar>
                <PlayerTitle>{player.name}</PlayerTitle>
                <PlayerMicrophoneIcon centered>
                    <MicrophoneIcon
                        width={20}
                        color={'rgba(0, 0, 0, .5)'}
                        isEnabled={player.isMicrophoneEnabled}/>
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
    const { pos, player } = props;
    const { state: { colorsPos, activeBlock, currentBlock, die } } = useContext(GameContext);
    const color = colorsPos[pos];
    const placement = Placement[pos];
    const shouldShowArrow = currentBlock === pos && die === -1;

    return (
        <Container
            color={color}
            direction={FlexDirection[placement]}
            active={activeBlock === pos}>
            <PlayerBlock
                player={player}/>
            <DiceBlock
                pos={pos}
                color={color}/>
            {shouldShowArrow && (
                <HorizontalArrow
                    color={color}
                    direction={placement}
                />
            )}
        </Container>
    )
};


PlayerWidget.propTypes = {
    pos: PropTypes.string,
    player: PropTypes.object,
};

export default PlayerWidget;