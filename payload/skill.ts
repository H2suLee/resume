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
    {
      title: 'PL/SQL',
    },
    {
      title: 'XML',
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: '프레임워크 & 라이브러리',
  items: [
    {
      title: '전자정부프레임워크',
    },
    {
      title: 'Spring',
    },
    {
      title: 'Spring Boot',
    },
    {
      title: 'Vue.js',
    },
    {
      title: 'Axios',
    },
    {
      title: 'JQuery',
    },
    {
      title: 'JSP',
    },
    {
      title: 'Thymeleaf',
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: '데이터베이스 & 인프라',
  items: [
    {
      title: 'MariaDB',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'Oracle',
    },
    {
      title: 'Tibero',
    },
    {
      title: 'MongoDB',
    },
    {
      title: 'AWS EC2',
    },
    {
      title: 'NCP',
    },
    {
      title: 'OCI',
    },
    {
      title: 'Apache',
    },
    {
      title: 'Tomcat',
    },
    {
      title: 'Jeus',
    },
    {
      title: 'Mongo Atlas',
    },
    {
      title: 'Redis Cloud',
    },
  ],
};

const automation: ISkill.Skill = {
  category: '도구',
  items: [
    {
      title: 'Eclipse',
    },
    {
      title: 'InteliJ',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'sql developer',
    },
    {
      title: 'SQL Gate',
    },
    {
      title: 'Studio 3T',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Koyeb',
    },
    {
      title: 'PuTTY',
    },
    {
      title: 'Docker',
    },
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
      title: 'SVN',
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: '기타 보유 기술 및 경험',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'Spring Security',
    },
    {
      title: 'JPA',
    },
    {
      title: 'FCM',
    },
    {
      title: 'RestAPI',
    },
    {
      title: 'Websocket',
    },
    {
      title: 'Whatap',
    },
    {
      title: 'Google Analytics',
    },
    {
      title: 'Netfunnel',
    },
    {
      title: 'JMeter',
    },
    {
      title: 'CODE-RAY',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, kernelDevelopment, virtualization, automation, networkSecurity],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
