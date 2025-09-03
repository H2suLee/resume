import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '신라시스템',
      positions: [
        {
          title: '서비스개발팀 주임',
          startedAt: '2025-01',
          descriptions: ['한국사학진흥재단 U-ERP 시스템 운영/유지보수(파견)'],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'NCP',
            'Jenkins',
            'Tibero',
            'Redis',
            'MCCS',
            'exBuilder',
            'clipReport',
            'BiMatrix',
            'Git',
            'Rocky Linux',
          ],
        },
        {
          title: '개발1팀 사원',
          startedAt: '2022-11',
          endedAt: '2024-12',
          descriptions: ['시스템 구축/고도화/운영/유지보수'],
          skillKeywords: [
            'Java',
            'Spring',
            'eGovFramework',
            'Javascript',
            'Vue.js',
            'jsp',
            'jquery',
            'JPA',
            'Oracle',
            'MySQL',
            'Apache',
            'Tomcat',
            'Jeus',
            'Maven',
            'SVN',
          ],
        },
      ],
    },
  ],
};

export default experience;
