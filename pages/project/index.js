import styled from 'styled-components'; 
import Seo from "../../components/Seo"
import { Body, Img, FlexCenter } from "../index";
import { ColumnBody, Title } from "../about";
import Link from "next/link";


const Logo = styled(Img)`
width:200px;
height:100px;
border-radius:10px;
&:hover {
  transform:scale(1.5,1.5);
}
`

const Box = styled(FlexCenter)`
width:200px;
height:100px;
border:1px solid white;
border-radius:10px;
background-color:white;
font-size:24px;
&:hover {
  transform:scale(1.5,1.5);
}

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
          pathname: '/project/personal',
          query:{
            company:"personal"
          }
        }}
        >
        <a  ><Box >Personal Project</Box></a>
        </Link>
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