import styled from "styled-components";
import Seo from "../../components/Seo";
import { Title } from "../about";
import { FlexCenter, Body } from "../index";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { personalData, lunaData,  partsData} from "../../datas"

const Box = styled.div`
  display: grid;
  grid-template-rows: 100px auto;
  justify-items: center;
  width: 400px;
  height: 550px;
  background-color: white;
  font-size: 10px;
  border: 3px solid #f5f7f9;
  padding-top: 10px;
`;
const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items:  flex-start;
  justify-content: space-around;
  padding-right: 10px;
`;
const Container = styled.div`
  padding: 10px
  width: 1500px;
  
  display: flex;
  justify-content: space-around;
`;

export const ProjectImg = styled.img`
  max-width: 160px;
  max-height: 80px;
`;
const ProjectHoverImg = styled(ProjectImg)`
padding-left:10px;
&:hover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform:scale(8,8) translate(-10%, -10%);;
}
`;
const Text = styled.span`
  font-size: 10px;
`;

const ContentBox = styled.div`
  padding-left: 30px;
  width: 400px;
  display: grid;
  grid-template-columns: 100px auto;
  align-items: center;
  justify-items: left;
`;
const Content = styled.div`
height:10px;
  margin: 10px;
  font-size: 14px;
`;
const ContentList = styled(Content)`
  height:120px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #bdc3c7;
  }
`;
const DetailTitle = styled(Title)`
  font-size: 14px;
`;
const List = styled.li`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 15px auto;
`;

export default function ProjectDetail() {
  const router = useRouter();
  const { company } = router.query;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    if (datas.length === 0) {
      switch (company) {
        case "personal":
          setDatas(personalData);
          break;
        case "lunalabs":
          setDatas(lunaData);
          break;
        case "partsgo":
          setDatas(partsData);
          break;
      }
    }
  });
  return (
    <Body>
      <Seo title="ProjectDetail" />
      <Container>
        {datas?.map((data, i) => (
          <Box key={i}>
            <ColumnBox>
            { data.url ?
            <>
              <a href={data.url} target="_blank" rel="noreferrer">
                <ProjectImg src={data.img} />
              <div style={{textAlign:"center", width:"100%"}}>
                <Text style={{color:"blue"}}>(이미지를 클릭해주세요)</Text>
              </div>
              </a>
            </>
              : 
              data.img.indexOf("gif") > 0 ?
              <>
              <ProjectHoverImg src={data.img}/>
              <div style={{textAlign:"center", width:"100%"}}>
                <Text>(로고 위에 마우스포인터를 올려주세요)</Text>
              </div>
              </>
              :
              <ProjectImg src={data.img} />
            }
            </ColumnBox>
            <ColumnBox>
              <ContentBox>
                <DetailTitle>프로젝트 이름</DetailTitle>
                <Content>{data.project_name}</Content>
              </ContentBox>
              <ContentBox>
                <DetailTitle>작업날짜</DetailTitle>
                <Content>{data.date}</Content>
              </ContentBox>
              <ContentBox>
                <DetailTitle>포지션</DetailTitle>
                <Content>{data.position}</Content>
              </ContentBox>
              <ContentBox>
                <DetailTitle>사용 스택</DetailTitle>
                <Content>{data.stacks}</Content>
              </ContentBox>
              <ContentBox>
                <DetailTitle>프로젝트 내용</DetailTitle>
                <Content>{data.task}</Content>
              </ContentBox>
              <ContentBox>
                <DetailTitle>주요 수행업무<br/><br/><Text>&nbsp;&nbsp;&nbsp;(파란 항목 클릭) </Text></DetailTitle>
                <ContentList>
                  <ol>
                    {data.my_task?.map((li, idex) => (
                    li.url ?
                      <a href={li.url} target="_blank" rel="noreferrer" style={{color:"blue"}}>
                        <List key={idex}>
                          <span >{idex + 1}</span> 
                          <span >{li.task}</span> 
                        </List>
                      </a>
                      :
                      <List key={idex}>
                      <span >{idex + 1}</span> 
                      <span >{li.task}</span> 
                    </List>
                    ))}
                  </ol>
                </ContentList>
              </ContentBox>
            </ColumnBox>
          </Box>
        ))}
      </Container>
    </Body>
  );
}
