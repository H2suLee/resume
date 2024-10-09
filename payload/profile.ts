import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/_pic2.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이희수',
    small: '',
  },
  contact: [
    {
      title: 'heesujuly@gmail.com',
      link: 'mailto:heesujuly@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-7181-9541',
      icon: faPhone,
    },
    {
      link: 'https://github.com/H2suLee',
      icon: faGithub,
    },
    {
      link: '대구광역시 수성구 노변공원로 34',
      icon: faBell,
    },
  ],
  notice: {
    title: '',
    // icon: faBell,
  },
};

export default profile;
