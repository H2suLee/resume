import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '풀스택 SI개발자로서 주로 Spring 프레임워크와 Java, javascript, Linux, RDBMS 를 사용하여 웹서비스를 개발, 운영한 경험이 있습니다. 개발 시 확장성과 유지 보수성이 높은 백엔드 아키텍처와 패턴을 위해 언제나 고민하고 있습니다. 미래에는 어딘가의 기술 조직 리더로 성장하는 것을 목표로, 다양한 기술을 학습하고 활용하며 적극적으로 역량 파이를 확장해 나가고 있습니다.',
  ],
  sign: 'Leeheesu',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
