import styled from 'styled-components'; 
import Seo from "../../components/Seo"
import { Body, Img } from "../index";
import { ColumnBody, Title } from "../about";
import Link from "next/link";


const Logo = styled(Img)`
width:300px;
height:150px;
border-radius:10px;
`
const Container = styled.div`
margin-top:50px;
  width:800px;
  display:flex;
  justify-content:space-around;
`
const Text = styled.span`
  font-size: 12px;
  margin-top:10px;
`;

export default function Project() {
    return (
      <ColumnBody>
      <Seo title="Project"/>
      <Title>Project</Title>
      <Text>(로고를 클릭해주세요)</Text>
      <Container>
        <Link
        href={{
          pathname: '/project/lunalabs',
          query:{
            company:"luna"
          }
        }}
        
        >
        <a  ><Logo src="/lunalabs.jpeg"/></a>
        </Link>
        <Link
        href={{
          pathname: '/project/partsgo',
          query:{
            company:"parts"
          }
        }}
        >
        <a><Logo src="/partsgo.png"/></a>
        </Link>
      </Container>
  
      </ColumnBody>
    )
  }