import { ImgWebp } from '../../../../helpers/imgwebp';
import style from './Partners.module.scss';

// img imports
import img1 from '../../../../assets/img/home/partners/img1.png';
import img1_2x from '../../../../assets/img/home/partners/img1@2x.png';
import img1Webp from '../../../../assets/img/home/partners/img1.webp';
import img2 from '../../../../assets/img/home/partners/img2.png';
import img2_2x from '../../../../assets/img/home/partners/img2@2x.png';
import img2Webp from '../../../../assets/img/home/partners/img2.webp';
import img3 from '../../../../assets/img/home/partners/img3.png';
import img3_2x from '../../../../assets/img/home/partners/img3@2x.png';
import img3Webp from '../../../../assets/img/home/partners/img3.webp';
import img4 from '../../../../assets/img/home/partners/img4.png';
import img4_2x from '../../../../assets/img/home/partners/img4@2x.png';
import img4Webp from '../../../../assets/img/home/partners/img4.webp';
import img5 from '../../../../assets/img/home/partners/img5.png';
import img5_2x from '../../../../assets/img/home/partners/img5@2x.png';
import img5Webp from '../../../../assets/img/home/partners/img5.webp';
import img6 from '../../../../assets/img/home/partners/img6.png';
import img6_2x from '../../../../assets/img/home/partners/img6@2x.png';
import img6Webp from '../../../../assets/img/home/partners/img6.webp';

const partnersList = [
  {
    src: img1,
    src2x: img1_2x,
    srcWebp: img1Webp,
    link: 'https://ethereum.org/en/',
  },
  {
    src: img2,
    src2x: img2_2x,
    srcWebp: img2Webp,
    link: 'https://twitter.com/LuckyBirdsLabs',
  },
  {
    src: img3,
    src2x: img3_2x,
    srcWebp: img3Webp,
    link: 'https://transak.com/',
  },
  {
    src: img4,
    src2x: img4_2x,
    srcWebp: img4Webp,
    link: 'https://digit-nova.com/',
  },
  {
    src: img5,
    src2x: img5_2x,
    srcWebp: img5Webp,
    link: 'https://kevurugames.com/',
  },
  {
    src: img6,
    src2x: img6_2x,
    srcWebp: img6Webp,
    link: 'https://multiversx.com/',
  },
];

const Partners = () => {
  return (
    <div className={style.partners}>
      <div className='container'>
        <div className={`${style.partners__title} title_lg`}>
          Team & Partnerships
        </div>
        <div className={style.partnersBody}>
          {partnersList.map((item, index) => (
            <PartnersCard
              key={index}
              img={item.src}
              img2x={item.src2x}
              imgWebp={item.srcWebp}
              href={item.link ? item.link : '#'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PartnersCard = ({ img, img2x, imgWebp, href }) => (
  <a
    href={href}
    target={href === '#' ? '' : '_blank'}
    rel='noreferrer'
    className={style.card}
  >
    <ImgWebp src={img} src2x={img2x} srcWebp={imgWebp} />
  </a>
);

export default Partners;
