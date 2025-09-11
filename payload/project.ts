import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '한국사학진흥재단 ERP 운영/유지보수',
      startedAt: '2025-01',
      // endedAt: '2024-11',
      where: '예산회계, 경영정보, 전자결재, 인사급여, 통합포털이 포함된 ERP 시스템 운영',

      descriptions: [
        {
          content:
            '관리자시스템, 통합포털, 경영정보, 각 시스템 연계 기능 관련 민원 대응 신규 요구사항 반영',
        },
      ],
    },
    {
      title: '한국사학진흥재단 ERP 고도화(2차, 3차)',
      startedAt: '2024-01',
      endedAt: '2024-12',
      where: '예산회계, 경영정보, 전자결재, 인사급여, 통합포털이 포함된 ERP 시스템 고도화',
      descriptions: [
        {
          content: '관리자시스템, 통합포털, 사용자마당 개발 담당',
        },
        {
          content:
            'NCP 클라우드 모니터링 api 를 이용하여 네트워크 트래픽, LB, Server 사용량에 대한 모니터링 기능 구현',
        },
        {
          content: '코드레이 툴을 이용하여 소스 보안 취약점 개선',
        },
      ],
    },
    {
      title: '한라산 탐방예약시스템 유지보수',
      startedAt: '2023-03',
      endedAt: '2024-12',
      where: '한라산 백록담 탐방예약/등정인증 관리 시스템',
      descriptions: [
        {
          content:
            '카카오 알림톡 도입으로 기존 SMS를 전면 대체, 관리비용 절감 및 발송 효율 향상. 알림 발송, 로그, 템플릿 관리 기능 개발 및 매뉴얼 작성',
        },
        {
          content:
            'APM(WhaTap) 설치로 실시간 트래픽 및 성능 모니터링 체계 구축, 문제 발생 시 대응 시간 30% 단축',
        },
        {
          content: '웹서버 보안 대응, 자바 코드 취약점 대응',
        },
        {
          content: '출입게이트, 무인주차시스템, CCTV, 모바일앱 등 여러분야의 업체와 연계하여 협력',
        },
        {
          content: '1월 1일 예약처럼 최대 2만 명 동시접속 발생하는 다중 트래픽 환경 관리 경험',
        },
        {
          content: '게이트, 무인주차시스템, CCTV, 모바일 앱 등 여러 분야의 업체와 연계하여 협력함',
          descriptions: [
            { content: '넷퍼넬을 활용한 접속자 순번 제어와 모니터링' },
            { content: '주기적 DB 리포트 출력하여 필요시 로직 최적화와 튜닝 수행' },
            { content: '메인 DB 연도별 분리로 조회 속도 개선(먹통 수준 → 5초 향상)' },
          ],
        },
      ],
    },
    {
      title: '지리산 천왕봉 등정 인증 시스템 구축/유지보수',
      startedAt: '2023-07',
      endedAt: '2024-12',
      where:
        '웹사이트에서 사용자가 등정인증을 신청후 승인받으면 탐방사무소 키오스크에서 신청 건에 대해 결제하고 인증서를 출력함',
      descriptions: [
        {
          content: '국립공원공단 회원DB 연계 및 SSO 적용',
        },
        {
          content: '웹포스 구현(KISPOS), 키오스크 결제 모듈 연계(KIS), 프린트 출력 연계',
        },
        {
          content:
            '연계 과정에서 Websocket 통신, activeX 통신 등 다양한 데이터 통신은 물론 ocx, dll 파일 형식에 대해서도 습득',
        },
      ],
    },
    {
      title: 'DIP SW융합제품 개발(과제사업)',
      startedAt: '2023-07',
      endedAt: '2023-11',
      where:
        '웨어러블 기기에서 측정한 생체 데이터(심박수, 산소포화도)를 분석하여 신체 상태를 구분하고, 위험 시 구급대원 및 비상연락망에 신호를 보내는 시스템',
      descriptions: [
        {
          content: '앱연계로 진행하여, API 관리 역량과 앱개발과의 협업 역량 증진',
        },
        {
          content: '주소/좌표/공공데이터 활용 경험',
        },
        {
          content: 'jmeter 를 이용하여 성능 테스트 진행',
        },
      ],
    },
    {
      title: 'SCMS V2.0',
      startedAt: '2023-04',
      endedAt: '2023-06',
      where: '회사 자체 CMS 프레임워크 고도화',
      descriptions: [
        {
          content:
            'Spring + jsp 기반의 프로젝트를 Spring boot + JPA + Vue.js 기반의 프로젝트로 고도화',
        },
      ],
    },
    {
      title: '경북대학교 인공지능 산학플랫폼 구축/유지보수',
      startedAt: '2022-11',
      endedAt: '2023-10',
      where:
        '학부생들이 프로젝트 팀을 구성해 지원을 신청하면, 산업체와 대학이 이를 승인하여 프로젝트 수행을 돕도록 지원하는 플랫폼',
      descriptions: [
        {
          content:
            '유지보수성과 가독성을 위해 클린 코드 작성법을 학습하고, 리팩토링을 공부하여 코드의 품질을 개선함',
        },
        {
          content:
            '프로젝트 기간, 참여자, 기업매칭여부, 승인 여부 등 프로젝트의 상태에 따라 사용 가능한 기능과 제한 사항이 달라지는 점을 고려해 데이터의 일관성과 무결성을 유지하고 프로젝트의 완성도를 높이도록 노력함. 데이터간 모순에 대해 깊게 고민하였던 이 경험은 추후 타프로젝트에서도 큰 도움이 됨',
        },
      ],
    },
  ],
};

export default project;
