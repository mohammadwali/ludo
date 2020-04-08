import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Square } from '../../components/styled';
import { SafeSpotMap } from '../../constant';
import StarIcon from '../../images/star.svg';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 3}, 1fr);
`;

const HomePosition = {
    TOP: 'top',
    LEFT: 'left',
    RIGHT: 'right',
    BOTTOM: 'bottom',
};

const SafeColorSpot = {
    top: [1, 7, 8, 9, 10, 11],
    right: [4, 5, 7, 10, 13, 16],
    bottom: [16, 10, 9, 8, 7, 6],
    left: [12, 13, 10, 7, 4, 1],
};

const blocksList = [...Array(18).keys()];

const getColsByHomePosition = (pos) => {
    return [HomePosition.TOP, HomePosition.BOTTOM].includes(pos) ? 6 : 3;
};

const SquaresBlock = (props) => {
    const { homePosition, color } = props;
    const cols = getColsByHomePosition(homePosition);
    const SafeSpot = SafeSpotMap[homePosition][2];

    const shouldFillColor = useCallback((index) => {
        return SafeColorSpot[homePosition].includes(index);
    }, [homePosition]);


    return (
        <Container cols={cols}>
            {
                blocksList.map((index) => (
                    <Square
                        key={index}
                        color={shouldFillColor(index) && color}
                    >
                        {index === SafeSpot && <img src={StarIcon} width={'100%'}/>}
                    </Square>
                ))
            }

        </Container>
    );
};

SquaresBlock.propTypes = {
    color: PropTypes.string.isRequired,
    homePosition: PropTypes.string
};

SquaresBlock.HomePosition = HomePosition;

export default SquaresBlock;