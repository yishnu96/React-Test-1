import React from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip';
import styled from "styled-components";

const Container = styled.div`
  background-color: #0cbaba;
  width: 150px;
  margin: 30vh auto;
  padding: 15px;
  text-align: center;
  font-size: large;
  color: white;
  border-radius: 50px;

`
const StyledReactTooltip = styled(ReactTooltip)`
  background-color: #eeb868 !important;
  padding: 15px !important;
  color: white !important;
  box-shadow: 0px 2px 20px black;
  &:after {
    border-top-color: #eeb868 !important;
  }
`;

function App() {
  return (
      <div className="App">
        <Container data-tip data-for='download'> 
          Download
        </Container>
        <StyledReactTooltip id='download' place='top' effect='solid'>
          <span>File Size: 50MB</span>
        </StyledReactTooltip>
      </div>
  );
}

export default App;
