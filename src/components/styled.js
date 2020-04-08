import styled from 'styled-components';
import { ColorMap } from '../constant';

export const Square = styled.div`
    background: ${props => props.color || 'none'};
    width: 35px;
    height: 35px;
    box-shadow: 0 0 0 1px #dbdbdb;
    margin: 0 0 1px 1px; 
`;

export const Box = styled.div`
    display: flex;
    box-shadow: 0 0 0 1px #dbdbdb;
    margin: 0 0 1px 1px; 
`;

export const CenteredBox = styled(Box)`
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.div`
    background: ${props => props.color};
    border-radius: 100%;
    padding: 1.5em
`;

export const TokenRow = styled.div`
    display: flex;
`;

export const TokenBlock = styled.div`
    border-radius: 100%;
    padding: .5em;
    background: #fff;
    display: flex;
    margin: .6em;
`;

export const Token = styled.div`
    width: 2em;
    height: 2em;
    border-radius: 100%;
    background: ${props => props.color};
    border: 4px inset rgba(0, 0, 0, 0.2);
`;

export const Triangle = styled.div`
    width: 0;
    height: 0;
    position: absolute;
`;

export const TriangleRight = styled(Triangle)`
    top: 0;
    border-top: 54px solid transparent;
    border-left: 54px solid ${ColorMap.RED};
    border-bottom: 54px solid transparent;
`;
export const TriangleLeft = styled(Triangle)`
    right: 0;
    border-top: 54px solid transparent;
    border-right: 54px solid ${ColorMap.YELLOW};
    border-bottom: 54px solid transparent;
`;
export const TriangleTop = styled(Triangle)`
    bottom: 0;
    border-left: 54px solid transparent;
    border-right: 54px solid transparent;
    border-bottom: 54px solid ${ColorMap.BLUE};
`;
export const TriangleBottom = styled(Triangle)`
    top: 0;
    border-left: 54px solid transparent;
    border-right: 54px solid transparent;
    border-top: 54px solid ${ColorMap.GREEN};
`;