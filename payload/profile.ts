import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/_pic1.jpg';

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
    /*
    {
      title: 'https://h2sudev.notion.site',
      link: 'https://h2sudev.notion.site/26cb7bbe5f0c807ca2e6f0314b0c14fb',
      icon: faBookmark,
    },
    */
  ],
  notice: {
    title: '',
    // icon: faBell,
  },
};

export default profile;
