import styled from "styled-components";
import Seo from "../../components/Seo";
import { Title } from "../about";
import { FlexCenter, Body } from "../index";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { lunaData,  partsData} from "../../datas"

const Box = styled.div`
  display: grid;
  grid-template-rows: 100px auto;
  justify-items: center;
  width: 400px;
  height: 600px;
  fontsize: 10px;
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
  height: 600px;
  background-color: white;
  display: flex;
  justify-content: space-around;
`;

export const ProjectImg = styled.img`
  max-width: 160px;
  max-height: 80px;
  
`;
const Text = styled.span`
  font-size: 10px;
  text-align:center;
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
  margin: 10px;
  font-size: 14px;
`;
const ContentList = styled(Content)`
 
  max-height:120px;
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
  font-size: 16px;
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
        case "lunalabs":
          setDatas(lunaData);
          break;
        case "partsgo":
          setDatas(partsData);
          break;
      }
    }
  });
  console.log(company);
  return (
    <Body>
      <Seo title="ProjectDetail" />
      <Container>
        {datas?.map((data) => (
          <Box>
            <ColumnBox>
            { data.url ?
            <>
              <a href={data.url} target="_blank" rel="noreferrer">
                <ProjectImg src={data.img} />
              </a>
              <div style={{textAlign:"center", width:"100%"}}>
                <Text>(로고를 클릭해주세요)</Text>
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
                <DetailTitle>포지션</DetailTitle>
                <Content>{data.position}</Content>
              </ContentBox>
              <ContentBox>
                <DetailTitle>사용 스택</DetailTitle>
                <Content>{data.stacks}</Content>
              </ContentBox>
              <ContentBox>
                <DetailTitle>업무</DetailTitle>
                <Content>{data.task}</Content>
              </ContentBox>
              <ContentBox>
                <DetailTitle>나의 주요 업무 </DetailTitle>
                <ContentList>
                  <ol>
                    {data.my_task?.map((li, idex) => (
                      <List key={idex}>
                        <span>{idex + 1}</span> 
                        <span>{li}</span> 
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
