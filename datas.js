export const personalData = [
    {
      img: "bransome.gif",
      url: "https://www.notion.so/11-Bgle-Bransome-40d666f548064c39a4bc93dd8a0df107",
      date: "2021-04",
      project_name: "Bransome",
      position: "백엔드",
      stacks: "Javascript, NodeJS,  Express, Mysql, Sequlize, AWS(S3, EC2,RDS)",
      task:
        "브랜썸은 조금 더 쉽고 빠르게 브랜딩 영감을 공유",
      my_task: [
        {
          task:"AWS 배포",
          url:"",
      },
        {
          task:"서버와 DB 셋팅",
          url:"",
      },
        {
          task:"로그인, 로그아웃 API 구현",
          url:"",
      },
      
      ],
   
    },
    {
      img: "remote-job-searching.gif",
      url: null,
      date: "2021-09",
      project_name: "원격근무잡 크롤링  ",
      position: "풀스택",
      stacks: "Python, Flask, BeautifulSoup4, Requests, Heroku, HTML/CSS",
      task:
        "stackOverFlow, Wework-Remotely, Remoteok 3개의 사이트에서 원격근무 일자리만  키워드에 맞게 크롤링해서 보여줌.",
      my_task: [
        {
          task:"BeautifulSoup4을 이용해서 크롤링봇 개발",
          url:"https://blog.naver.com/forportfolio/222783079831",
      },
        {
          task:"한번 검색하고 난 데이터는 서버에 저장시켜서 재검색할 때 로딩시간을 줄임",
          url:"https://blog.naver.com/forportfolio/222783085063",
      },
        {
          task:"검색한 데이터를 다운 받아서 엑셀파일로 열수 있도록 CSV 다운로드 기능",
          url:"https://blog.naver.com/forportfolio/222783091723",
      },
        {
          task:"잘못된 검색을 하거나 서버에러가 생길 경우 에러페이지로 넘어가도록 함",
          url:"https://blog.naver.com/forportfolio/222783093403",
      },
      ],
   
    },
    {
      img: "dashboard.gif",
      url: "https://song-corona-dashboard.herokuapp.com/",
      date: "2021-09",
      project_name: "코로나 대쉬보드",
      position: "프론트",
      stacks: "Python, Pandas, Plotly dash, Jupyter-lab, Heroku",
      task:
        "전세계 코로나 확진자, 사망자, 완치자를 맵, 테이블, 막대그래프, 라인차트로 보여주는 대쉬보드"
        ,
      my_task: [
        {
          task:"CSSEGISandData'의 데이터를 Pandas로 데이터를 전처리",
          url:"https://blog.naver.com/forportfolio/222783088716",
      },
        {
          task:"plotly dash를 사용하여 데이터 시각화",
          url:"https://blog.naver.com/forportfolio/222783102140",
      },
        {
          task:"셀렉트 기능을 넣어서 국가별로 라인차트가 보여지게 함",
          url:"https://blog.naver.com/forportfolio/222783104317",
      },
      ],
    },
  ];
export const lunaData = [
    {
      img: "gtx.png",
      url: null,
      date: "2021-08~2021-10",
      project_name: "대림건설의 GTX 공사 통합관리시스템",
      position: "풀스택",
      stacks: "React, JQuery, NodeJS, Express, MySQL",
      task:
        "GTX 공사 통합관리시스템을 요청사항에 따라 기능 추가 및 에러 핸들링 등 유지보수 업무 수행",
     
      my_task: [
        {
          task:"화재, 사고, 위험 등 실시간으로 감지하여 발생할 경우, 알림 기능 구현",
          url:"https://blog.naver.com/forportfolio/222784526873",
      },
        {
          task:"Cordova를 사용하여 모바일웹과 데스크탑웹의 데이터 연동 작업",
          url:"",
      },
        {
          task:"Cookie를 사용하여 로그인된 유저의 통신이 끊겨도 데이터 유지보존",
          url:"https://blog.naver.com/forportfolio/222784542035",
      },
      ],
    },
  ];
  
  export const partsData = [
    {
      img: "admin.jpg",
      date: "2021-11~2022-05",
      project_name: "파츠고 Admin 페이지 운영 ",
      url: null,
      position: "풀스택",
      stacks: "React, PHP, Laravel, MariaDB, NestJS, NodeJS",
      task:
        "관리자 웹사이트 운영 및 고도화 작업",
      my_task: [
        {
          task:"기존의 Session을 JWT 로그인으로 변경",
          url:"",
      },
        {
          task:"toast grid을 활용하여 데이터를 수정 및 삭제 기능 구현",
          url:"",
      },
        {
          task:"출고하고 남은 재고를 파츠고 재고로 자동 변경될 수 있도록 로직 수정",
          url:"",
      },
        {
          task:"Queue 처리를 통해서 발생한 대용량 로그정보를 순차적으로 저장하도록 변경",
          url:"",
      },
        {
          task:"기존의 PHP 프론트페이지를 리액트로 변경",
          url:"",
      },
      ],
    },
    {
      img: "pandaparts.png",
      date: "2021-12~2022-05",
      project_name: "판다파츠 2022년 리뉴얼 웹사이트 개발 및 운영",
      url: "https://pandaparts.co.kr/",
      position: "풀스택",
      stacks: "React, NextJS, Laravel, MariaDB, NestJS, NodeJS, Twilio SendGrid",
      task:
        "전반의 프론트엔드 작업과 고객센터, 견적기능, 마이페이지 등은 풀스택 개발 및 운영과 고도화 작업",
     
      my_task: [
        {
          task:"대용량 데이터를 검색할때 먼저 가져오는 것부터 실시간으로 보여주는 polling search 기능 구현",
          url:"",
      },
        {
          task:"검색된 데이터를 필터 조건에 맞게 재검색할 수 있도록 구현",
          url:"",
      },
        {
          task:"고객센터 QnA 게시판 CRUD API 개발",
          url:"",
      },
        {
          task:"구글검색 최적화 SEO를 위해서 구조화된 데이터 기능 추가",
          url:"",
      },
        {
          task:"엑셀 테이블 및 엑셀파일로 등록된 견적내역서를 DB에 저장 할수있도록 구현",
          url:"",
      },
        {
          task:"Queue 처리를 통해서 견적 등록 API가 순차적으로 실행되도록 변경",
          url:"",
      },
        {
          task:"부품 상세페이지는 SSR(서버사이드 렌더링)으로 구현",
          url:"",
      },
        {
          task:"Recoil을 사용하여 견적수량 데이터를 전역에 표시되도록 구현",
          url:"",
      },
        {
          task:"사용자 접속 정보를 가지고 모바일웹 또는 데스크탑웹으로 Redirect 처리",
          url:"",
      },
        {
          task:"excelJS을 활용하여 거래명세서 데이터를 엑셀 다운로 할 수 있도록 구현 ",
          url:"",
      },
        {
          task:"판다파츠 리뉴얼 모바일웹 개발",
          url:"",
      },
      ],
    },
    {
      img: "partsgosite.png",
      date: "2022-04",
      project_name: "파츠고 2022년 리뉴얼 사이트 개발",
      url: null,
      position: "프론트엔드",
      stacks: "React, NextJS, Tailwind CSS",
      task:
        "리뉴얼 웹사이트 개발",
     
      my_task: [
        {
          task:"원페이지 스크롤 웹사이트로 개발",
          url:"",
      },
        {
          task:"전자제품 API를 활용해서 검색 기능 구현",
          url:"",
      },
        {
          task:"API로 가져온 데이터를 가격 기준으로 오름차순으로 데이터 가공하여 표시",
          url:"",
      },
  
      ],
    
    },
  ];