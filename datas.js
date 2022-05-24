export const lunaData = [
    {
      img: "gtx.png",
      url: null,
      project_name: "대림건설의 GTX 공사 통합관리시스템",
      position: "풀스택",
      stacks: "React, jQuery, Node.js, MySQL",
      task:
        "GTX 공사 통합관리시스템웹을 요청사항에 따라 기능 추가 및 에러 핸들링 등 유지보수 업무 수행",
      my_task: [
        "화재, 사고, 위험 등 실시간으로 감지하여 발생할 경우, 알림 기능 구현",
        "Cordova를 사용하여 모바일웹과 데스크탑웹의 데이터 연동 작업",
        "Cookie를 사용하여 로그인된 유저의 통신이 끊겨도 데이터 유지보존",
      ],
    },
  ];
  
  export const partsData = [
    {
      img: "admin.jpg",
      project_name: "파츠고 관리자 웹페이지 ",
      url: "https://pandaparts.co.kr/",
      position: "풀스택",
      stacks: "React, PHP, Laravel, marinaDB, NestJS",
      task:
        "관리자웹페이지 기능 추가 및 유지보수",
      my_task: [
        "기존의 Session을 JWT 로그인으로 변경",
        "toast grid을 활용하여 데이터를 수정 및 삭제 기능 구현",
        "출고하고 난 재고를 파츠고 재고로 자동변경될 수 있도록 로직 수정",
        "Queue 처리를 통해서 발생한 대용량 로그정보를 순차적으로 저장하도록 변경",
        "기존의 PHP 코드를 리액트로 변경",
      ],
    },
    {
      img: "pandaparts.png",
      project_name: "판다파츠 2022년 리뉴얼 사이트",
      url: null,
      position: "풀스택",
      stacks: "React, NextJS, Laravel, marinaDB, NestJS, Twilio SendGrid",
      task:
        "전반의 프론트엔드 작업과 고객센터, 견적기능, 마이페이지 등은 풀스택으로 웹사이트개발 및 상용화 문제에 있어서 에러해결 등 실시간 대응 등 운영업무",
      my_task: [
        "검색할때 대용량 데이터를 가져오는것부터 보여주는 polling search 기능으로 구현",
        "검색된 데이터를 필터 조건에 맞게 재검색할 수 있도록 구현",
        "검색 최적화 SEO를 위해서 구조화된 데이터 기능 추가",
        "엑셀 테이블 및 엑셀파일로 등록된 견적내역서를 DB에 저장 할수있도록 구현",
        "부품 상세페이지는 SSR을 사용하여 렌더링되도록 구현",
        "Recoil을 사용하여 견적수량 데이터를 전역에 표시되도록 구현",
        "사용자 접속 정보를 가지고 모바일웹 또는 데스크탑웹으로 Redirect 처리",
        "excelJS을 활용하여 거래명세서 데이터를 엑셀 다운로 할 수 있도록 구현 ",
        "판다파츠 리뉴얼 모바일웹 개발",
      ],
    },
    {
      img: "partsgosite.png",
      project_name: "파츠고 2022년 리뉴얼 사이트",
      url: null,
      position: "프론트엔드",
      stacks: "React, NextJS, Tailwind CSS",
      task:
        "만들어진 디자인에 따라 프론트 작업하여 웹사이트 개발",
      my_task: [
        "원페이지 스크롤 사이트으로 개발",
        "전자제품 API를 활용해서 검색 기능 구현",
        "API로 가져온 데이터를 가격 기준으로 오름차순으로 데이터 가공하여 표시",
      ],
    },
  ];