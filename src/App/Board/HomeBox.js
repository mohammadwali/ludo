import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
    Circle,
    Token,
    TokenRow,
    TokenBlock,
    CenteredBox
} from '../../components/styled';


export const Container = styled(CenteredBox)`
    height: 215px;
    width: 215px;
`;

const HomeBox = (props) => {
    return (
        <Container {...props}>
            <Circle {...props}>
                <TokenRow>
                    <TokenBlock>
                        <Token color={props.color}/>
                    </TokenBlock>
                    <TokenBlock>
                        <Token color={props.color}/>
                    </TokenBlock>
                </TokenRow>
                <TokenRow>
                    <TokenBlock>
                        <Token color={props.color}/>
                    </TokenBlock>
                    <TokenBlock>
                        <Token color={props.color}/>
                    </TokenBlock>
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
