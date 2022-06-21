import styled from "styled-components";
import Seo from "../components/Seo";
import { Body } from "./index";

export const ColumnBody = styled(Body)`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: auto;
  height: auto;
  margin: 10px 0px;
`;

export const Title = styled.header`
  font-size: 30px;
`;

const List = styled.li`
  margin: 10px 0px;
`;
const SmallTitle = styled(Title)`
  font-size: 18px;
`;
const SmallList = styled(List)`
  font-size: 15px;
  display:grid;
grid-template-columns: 90px auto;
`;

// const SmallContinaer = styled(Container)``;
// const Flex = styled.div`
//   display: flex;
//   justfy-content:space-around;
//   width:800px;
// `;
const TextBox = styled.div`
margin-top:10px;
width:800px;
height:180px;
  background-color:white;
  padding: 20px;
  border-radius:5px;
`
const Box = styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
width:800px;
`

const education = [
  "코드스테이츠 소프트웨어 엔지니어링 과정 26기 수료",
  "세명대학교 국제통상학과 졸업",
];



export default function About() {
  return (
    <ColumnBody>
      <Seo title="About" />
      <Container>
      <Title>&nbsp;&nbsp;Introduce</Title>
      <TextBox>
       소통, 유연함, 공유로 꾸준히 성장을 하는 개발자 이성우 입니다.<br/><br/>
       개발을 하면서 소통을 통해 문제를 해결하고, 수준있는 코드를 작성하려고 합니다. <br/><br/>
       4차산업 기술 등 새로운 기술과 지식에 대한 유연함으로 끊임없이 성장하는 개발자가 되려고 합니다.<br/><br/>
       지식 공유를 하면서 나뿐만 아니라, 함께 일하는 동료들과 성장하려고 합니다.<br/><br/>
       소통, 유연함, 공유로 끊임없이 발전하고 항상 긍정적인 개발자가 되겠습니다.
      </TextBox>
      </Container>
      <Box>
      <Container>
        <Title>Preferred Position</Title>
        <ol>
          <List>1. 백엔드 개발자</List>
          <List>2. 풀스택 개발자</List>
        </ol>
      </Container>
      <Container>
        <Title>Skills</Title>
        <ol>
          <SmallList><SmallTitle>Language</SmallTitle><span>: Javascript(TypeScript), Python, PHP</span> </SmallList>
          <SmallList><SmallTitle>FrontEnd</SmallTitle><span>: ReactJS, NextJS, React-Native, Tailwind CSS, HTML, CSS </span> </SmallList>
          <SmallList><SmallTitle>BackEnd</SmallTitle><span>: NodeJS, NestJS, Laravel, GraphQL, MySQL, <p style={{marginTop:"5px"}}>&nbsp;&nbsp;MariaDB, Eloquent ORM </p></span> </SmallList>
          <SmallList><SmallTitle>DevOps</SmallTitle><span>: Vercel, AWS, Heroku, Git  </span> </SmallList>
          <SmallList><SmallTitle>ETC</SmallTitle><span>: Socket.Io, Slack, ClickUp, Notion  </span> </SmallList>
          
        </ol>
      </Container>
      <Container>
        <Title>Education</Title>
        <ol>
          {education.map((el, i) => (
            <List key={i}>{el}</List>
          ))}
        </ol>
      </Container>
      <Container>
        <Title>Career</Title>
        <ol>
          <List>파츠고(7개월)</List>
          <List>루나랩스(3개월)</List>
        </ol>
      </Container>
      
      </Box>
    </ColumnBody>
  );
}
