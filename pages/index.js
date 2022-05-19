import styled from 'styled-components'; 
import Seo from "../components/Seo"

export const FlexCenter = styled.div`
    display:flex;
    display:flex;
  justify-content: center;
  align-items: center;
`

export const Body = styled(FlexCenter)`
height:85vh;
padding: 0px 20px;
max-width:1200px;
margin:0 auto;
 
  background-color:#F5F7F9;
`;



const Box = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`
export const Img = styled.img`
width:300px;
height:300px;
  border-radius:150px;
`
const Text = styled.span`
margin-top:20px;
  font-size:25px;
`

export default function Home() {
  return (
    <Body>
    <Seo title="Home"/>


    <Box>
      <Img src="/mypicture.jpeg"/>
      <Text>꾸준히 성장하는  개발자 이성우 입니다.</Text>
      </Box>

    </Body>
  )
}
