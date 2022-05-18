import styled from 'styled-components'; 
import Seo from "../components/Seo"

const Body = styled.div`
  padding: 0px 20px;
  max-width:800px;
  height:90vh;
  margin:0 auto;
  display:flex;
  justify-content: center;
  align-items: center;
`;
export default function Project() {
    return (
      <Body>
      <Seo title="Home"/>
  
      <div>
        꾸준히 성장하는  개발자 이성우 입니다.
        </div>
  
      </Body>
    )
  }