import styled from 'styled-components';
import { ColorMap } from '../constant';

export const FlexContainer = styled.div`
    display:flex;
    flex-direction: ${props => props.direction};
${
    props => props.centered ? `
        justify-content: center;
        align-items: center;
    ` : ''
}
`;

export const Box = styled(FlexContainer)`
     box-shadow: 0 0 0 1px #dbdbdb;
     margin: 0 0 1px 1px;     
`;

export const CenteredBox = styled(Box)`
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    display: flex;
    border: 1px solid #DEDEDE;
    border-radius: 4px;
    box-shadow: 0 2px 2px -1px rgba(0,0,0,.055);
`;

export const Square = styled(CenteredBox)`
    width: 35px;
    height: 35px;
    margin: 0 0 1px 1px;
    box-shadow: 0 0 0 1px #dbdbdb;
    background-size: 100%;
    background-image: ${props => props.hasStar ? 'url(\'/images/star.svg\') ' : 'none'};
    background-color: ${props => props.hasStar ? '#f5f5f5' : (ColorMap[props.color] || 'none')}
`;

export const Circle = styled.div`
    background: ${props => ColorMap[props.color]};
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
    width: ${props => (props.count ? 2 / props.count : 2)}em;
    height: ${props => (props.count ? 2 / props.count : 2)}em;
    border-radius: 100%;
    background: ${props => props.color ? ColorMap[props.color] : 'none'};
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
    border-left: 54px solid ${ColorMap.red};
    border-bottom: 54px solid transparent;
`;
export const TriangleLeft = styled(Triangle)`
    right: 0;
    border-top: 54px solid transparent;
    border-right: 54px solid ${ColorMap.yellow};
    border-bottom: 54px solid transparent;
`;
export const TriangleTop = styled(Triangle)`
    bottom: 0;
    border-left: 54px solid transparent;
    border-right: 54px solid transparent;
    border-bottom: 54px solid ${ColorMap.blue};
`;
export const TriangleBottom = styled(Triangle)`
    top: 0;
    border-left: 54px solid transparent;
    border-right: 54px solid transparent;
    border-top: 54px solid ${ColorMap.green};
`;

export const DiceContainer = styled.div`
    cursor: pointer;
    flex: .35;
    padding: .5em;
    background: rgba(0, 0, 0, .4);
    border-radius-right: 50%;
    
    & .die {
        & span.dot{
            width: 12px !important;
            height: 12px !important;
            top: 42px;
        }
       & div.face {
            border-raduius: 5px;
       } 
    }
`;

export const FloatingButton = styled.button`
    display: block;
    width: 6em;
    height: 6em;
    z-index: 999;
    border-radius: 50%;
    color: #848484;
    background: #FFF;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28);
    transition: all .1s ease-out;
    
    border: 0;
    position: fixed;
    right: 3em;
    bottom: 5em;
    outline: none;
    
    &:hover {
       transform: scale(1.05);
    }
    
    &:hover, &:active{
        outline: none;
    }
`;