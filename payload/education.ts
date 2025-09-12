import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '예담직업전문학교',
      subTitle: '여성 IT 인재 양성과정 수료',
      startedAt: '2022-04',
      endedAt: '2022-11',
    },
    {
      title: '경북대학교',
      subTitle: '영어영문학과 학사 졸업 (4.44/4.5)',
      startedAt: '2020-02',
      // endedAt: '2020-02',
    },
  ],
};

export default education;
