import styled from 'styled-components'; 
import Seo from "../components/Seo"
import { ColumnBody, Title } from "./about";
import { FlexCenter } from "./index";


const Container = styled(FlexCenter)`
  width:500px;
  height:500px;
  background-color:white;
  border-radius:10px;
  padding:50px;
  flex-direction:column;
  justify-content:space-around;
`

const Box = styled.div`
  width:220px;
  hieght30px;
  display:grid;
grid-template-columns: 50px 150px;
align-items:center;
padding-left:10px;
`

export const LogoImg = styled.img`
width:30px;
height:30px;
  border:1px solid #F5F7F9;
`

export default function Contact() {
    return (
      <ColumnBody>
      <Seo title="Contact"/>
      <Container>
        <Title>Contatct</Title>
        <Box>
          <LogoImg src="/logos/phone.jpg"/><span>010-3332-0773</span>
        </Box>
        <Box>
          <LogoImg src="/logos/gmail.png"/><span>godfgod3@gmail.com</span>
        </Box>
        <a href="https://developer-trier.tistory.com" target="_blank" rel="noreferrer">
        <Box>
          <LogoImg src="/logos/tstory.png"/><span style={{width:"100%"}}>기술공부 블로그 링크</span>
        </Box>
        </a>
        <a href="https://github.com/godfgod1" target="_blank" rel="noreferrer">
        <Box>
          <LogoImg src="/logos/github.png"/><span>깃허브 링크</span>
        </Box>
        </a>
        </Container>
  
      </ColumnBody>
    )
  }