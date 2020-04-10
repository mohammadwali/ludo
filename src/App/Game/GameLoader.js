import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../../components/styled';
import { ColorMap } from '../../constant';

const GameLoaderContainer = styled(FlexContainer)`
        div > div {
          
        }
        .yellow {
            background-color: ${ColorMap.yellow};
        }
        
        .red {
            background-color: ${ColorMap.red};
            animation-delay: 0.1s;
        }
        
        .blue {
            background-color: ${ColorMap.blue};
            animation-delay: 0.2s;
        }
        
        .green {
            background-color: ${ColorMap.green};
            animation-delay: 0.3s;
        }
`;


const LoadingCircle = styled.div`
    width: 3vw;
    height: 3vw;
    margin: 2vw;
    border-radius: 100%;
    background-image: linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(0, 0, 0, 0) 100%
    );
    animation: bounce 1.5s 0.5s linear infinite;
`;


export const GameLoader = (props) => {
    return (
        <GameLoaderContainer centered fluid>
            <LoadingCircle className="yellow"/>
            <LoadingCircle className="red"/>
            <LoadingCircle className="blue"/>
            <LoadingCircle className="green"/>
        </GameLoaderContainer>
    );
};
