import styled from 'styled-components';
import { ColorMap } from '../constant';

export const Box = styled.div`
    display: flex;
    ${props => props.withoutBorder ? '' : `
             box-shadow: 0 0 0 1px #dbdbdb;
             margin: 0 0 1px 1px; 
        `}
`;

export const CenteredBox = styled(Box)`
    justify-content: center;
    align-items: center;
`;

export const Square = styled(CenteredBox)`
    width: 35px;
    height: 35px;
    margin: 0 0 1px 1px;
    box-shadow: 0 0 0 1px #dbdbdb;
    background-size: 100%;
    background-image: ${props => props.hasStar ? 'url(\'/images/star.svg\') ' : 'none'};
    background-color: ${props => props.hasStar ? '#f5f5f5' : (ColorMap[props.color.toUpperCase()] || 'none')}
`;

export const Circle = styled.div`
    background: ${props => ColorMap[props.color.toUpperCase()]};
    border-radius: 100%;
    padding: 1em
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
    width: ${props => (props.count ? 1.5 / props.count : 1.5)}em;
    height: ${props => (props.count ? 1.5 / props.count : 1.5)}em;
    border-radius: 100%;
    background: ${props => props.color ? ColorMap[props.color.toUpperCase()] : 'none'};
    border: 4px inset rgba(0, 0, 0, 0.2);
    flex-shrink: 0;
    z-index:1;
`;

export const TokenPlaceHolder = styled(Token)`
    border-color: transparent;
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