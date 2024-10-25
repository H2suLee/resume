import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '신라시스템',
      position: '개발1팀 연구원',
      startedAt: '2022-11',
      descriptions: ['시스템 구축 및 고도화', '시스템 유지보수'],
      // skillKeywords: ['Java', 'Linux', 'Javascript', 'RDBMS'],
    },
    // {
    //   title: '한국문학번역원',
    //   position: '콘텐츠전략팀 사원',
    //   startedAt: '2020-05',
    //   endedAt: '2021-12',
    //   descriptions: [
    //     '디아스포라 온/오프라인 교류행사 운영',
    //     '대국민 디아스포라문학 독후감대회 운영',
    //   ],
    //   // skillKeywords: ['Open Source', 'Linux', 'AWS', 'RDBMS'],
    // },
  ],
};

export default experience;
