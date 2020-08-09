import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from "styled-components";
import { motion } from "framer-motion"
import {img} from './download.png'


const Container = styled.div`
  background-color: #0cbaba;
  width: 150px;
  margin: 30vh auto;
  padding: 15px;
  text-align: center;
  font-size: large;
  color: white;
  border-radius: 50px;
    // &:hover{
    //   background: url("https://cl.ly/0X3o100h2H0g/icon-download.svg") no-repeat center center;
    // }
}
`
const Harvor = styled.div`
  cursor: pointer;
  margin: 30vh auto;
  width: 150px;
}
`
const StyledReactTooltip = styled(ReactTooltip)`
  background-color: #eeb868 !important;
  padding: 20px !important;
  color: white !important;
  box-shadow: 0px 2px 20px black;
  &:after {
    border-top-color: #eeb868 !important;
  }
`;

function App() {
  return (
      <div className="App">
        {/* <Harvor data-tip data-for='download'> 
          <motion.div 
          whileHover={{ scale: 1.1,
          backgroundColor: "yellow" }}>

              <Container>Download</Container>

          </motion.div>
        </Harvor> */}

        <Container data-tip data-for='download'> 
          <motion.div 
          whileHover={{ scale: 1.1,
          backgroundColor: "#01baef",
          backgroundImage: 'URL("./download.png")',
          opacity: '0'}}>
            Download

          </motion.div>
        </Container>

        <StyledReactTooltip id='download' place='top' effect='solid'>
          <span>File Size: 50MB</span>
        </StyledReactTooltip>
      </div>
  );
}

export default App;
