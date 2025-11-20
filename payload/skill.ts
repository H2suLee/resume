import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: '프로그래밍 언어',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'javascript',
    },
    {
      title: 'HTML/CSS',
    },
    {
      title: 'SQL',
    },
    /*    {
      title: 'PL/SQL',
    },
    {
      title: 'XML',
    }, */
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: '프레임워크 & 라이브러리',
  items: [
    {
      title: 'Spring / Spring Boot',
    },
    {
      title: 'Vue.js',
    },
    {
      title: 'JQuery',
    },
    {
      title: 'JSP',
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: '데이터베이스 & 인프라',
  items: [
    {
      title: 'MySQL',
    },
    {
      title: 'Oracle',
    },
    {
      title: 'MongoDB',
    },
    {
      title: 'Redis',
    },
    // {
    //   title: 'AWS EC2',
    // },
    /*
    {
      title: 'NCP',
    },
    */
    {
      title: 'Nginx',
    },
    {
      title: 'Apache',
    },
    {
      title: 'Tomcat',
    },
    {
      title: 'Linux',
    },
  ],
};

const automation: ISkill.Skill = {
  category: '도구 / Devops',
  items: [
    /*
    {
      title: 'Jenkins',
    },
    */
    {
      title: 'Maven',
    },
    {
      title: 'npm',
    },
    {
      title: 'Git',
    },
    {
      title: 'Github',
    },
    {
      title: 'Github Actions',
    },
    {
      title: 'Docker',
    },
    {
      title: 'GHCR',
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: '기타 보유 기술 및 경험',
  items: [
    {
      title: 'Spring Security',
    },
    {
      title: 'OAuth2',
    },
    {
      title: 'Grafana',
    },
    {
      title: 'JPA',
    },
    {
      title: 'Firebase',
    },
    {
      title: 'RestAPI',
    },
    {
      title: 'Websocket',
    },
    {
      title: 'JMeter',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, kernelDevelopment, virtualization, automation, networkSecurity],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
