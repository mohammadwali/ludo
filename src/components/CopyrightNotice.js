import React, { memo } from 'react';
import styled from 'styled-components';


const Container = styled.h4`
  text-align:center;
  color: #949496;
  
  a {
   color: #ddd;
   text-decoration: none;
  }
`;

const CopyrightNotice = memo((props) => {
    const year = new Date().getFullYear();

    console.log('rendering...');

    return (
        <Container>
            Copyright © {year} &nbsp;
            <a href={'https://github.com/mohammadwali/'} target={'blank'}>Mohammad Wali</a>.
        </Container>
    )
});

export default CopyrightNotice;