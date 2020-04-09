import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
    Circle,
    Token,
    TokenRow,
    TokenBlock,
    TokenPlaceHolder,
    CenteredBox
} from '../../../components/styled';
import { useBoardState } from '../../../hooks/useBoardState';

const Container = styled(CenteredBox)`
    height: 215px;
    width: 215px;
`;

const HomeBox = (props) => {
    const { color, ranges } = props;
    const [{ tokenPosition }] = useBoardState();

    const renderTokenOnPosition = useCallback((key, pos) => {
        if (tokenPosition[color][key] === pos) {
            return <Token color={color}/>
        }
        return <TokenPlaceHolder/>;
    }, [tokenPosition, color]);

    return (
        <Container {...props}>
            <Circle {...props}>
                <TokenRow>
                    <TokenBlock>{renderTokenOnPosition(0, ranges[0])}</TokenBlock>
                    <TokenBlock>{renderTokenOnPosition(1, ranges[1])}</TokenBlock>
                </TokenRow>
                <TokenRow>
                    <TokenBlock>{renderTokenOnPosition(2, ranges[2])}</TokenBlock>
                    <TokenBlock>{renderTokenOnPosition(3, ranges[3])}</TokenBlock>
                </TokenRow>
            </Circle>
        </Container>
    );
};


HomeBox.propTypes = {
    color: PropTypes.string.isRequired,
};


HomeBox.defaultProps = {
    color: 'none',
};


export default HomeBox;
