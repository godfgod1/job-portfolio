import styled from 'styled-components'; 
import Seo from "../../components/Seo"
import { Body, Img } from "../index";
import { ColumnBody, Title } from "../about";
import Link from "next/link";


const Logo = styled(Img)`
width:300px;
height:200px;
border-radius:30px;
`
const Container = styled.div`
margin-top:50px;
  width:800px;
  display:flex;
  justify-content:space-around;
`

export default function Project() {
    return (
      <ColumnBody>
      <Seo title="Project"/>
      <Title>Project</Title>
      <Container>
        <Link
        href={{
          pathname: '/lunalabs',
        }}
        
        >
        <Logo src="/lunalabs.jpeg"/>
        </Link>
        <Link
        href={{
          pathname: '/partsgo',
        }}
        >
        <Logo src="/partsgo.png"/>
        </Link>
      </Container>
  
      </ColumnBody>
    )
  }