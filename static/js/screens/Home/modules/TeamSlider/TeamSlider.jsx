import { useState, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './TeamSlider.module.scss';
import EffectCustom from './customEffect';
import './slider.scss';
import { ImgWebp } from '../../../../helpers/imgwebp';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/effect-cards';

// img imports
import arrow from '../../../../assets/img/home/slider/arrow';
import che from '../../../../assets/img/home/slider/che.jpg';
import che2x from '../../../../assets/img/home/slider/che@2x.jpg';
import cheWebp from '../../../../assets/img/home/slider/che.webp';
import nix from '../../../../assets/img/home/slider/nix.jpg';
import nix2x from '../../../../assets/img/home/slider/nix@2x.jpg';
import nixWebp from '../../../../assets/img/home/slider/nix.webp';
import james from '../../../../assets/img/home/slider/james.png';
import james2x from '../../../../assets/img/home/slider/james@2x.png';
import jamesWebp from '../../../../assets/img/home/slider/james.webp';
import brock from '../../../../assets/img/home/slider/brock.png';
import brock2x from '../../../../assets/img/home/slider/brock@2x.png';
import brockWebp from '../../../../assets/img/home/slider/brock.webp';
import kanto from '../../../../assets/img/home/slider/kanto.png';
import kanto2x from '../../../../assets/img/home/slider/kanto@2x.png';
import kantoWebp from '../../../../assets/img/home/slider/kanto.webp';
import kolawolu from '../../../../assets/img/home/slider/kolawolu.jpg';
import kolawolu2x from '../../../../assets/img/home/slider/kolawolu@2x.jpg';
import kolawoluWebp from '../../../../assets/img/home/slider/kolawolu.webp';
import kirill from '../../../../assets/img/home/slider/kirill.jpg';
import kirill2x from '../../../../assets/img/home/slider/kirill@2x.jpg';
import kirillWebp from '../../../../assets/img/home/slider/kirill.webp';
import edgar from '../../../../assets/img/home/slider/edgar.jpg';
import edgar2x from '../../../../assets/img/home/slider/edgar@2x.jpg';
import edgarWebp from '../../../../assets/img/home/slider/edgar.webp';
import andre from '../../../../assets/img/home/slider/andre.jpg';
import andre2x from '../../../../assets/img/home/slider/andre@2x.jpg';
import andreWebp from '../../../../assets/img/home/slider/andre.webp';
import oscar from '../../../../assets/img/home/slider/oscar.jpg';
import oscar2x from '../../../../assets/img/home/slider/oscar@2x.jpg';
import oscarWebp from '../../../../assets/img/home/slider/oscar.webp';
import arri from '../../../../assets/img/home/slider/arri.jpg';
import arri2x from '../../../../assets/img/home/slider/arri@2x.jpg';
import arriWebp from '../../../../assets/img/home/slider/arri.webp';
import florin from '../../../../assets/img/home/slider/florin.jpg';
import florin2x from '../../../../assets/img/home/slider/florin@2x.jpg';
import florinWebp from '../../../../assets/img/home/slider/florin.webp';

const TeamSlider = () => {
  const [swiper, setSwiper] = useState();
  const prevElem = useRef();
  const nextElem = useRef();

  useEffect(() => {
    console.log(swiper);
    // swiper.slideNext();

    prevElem.current.addEventListener('click', () => swiper.slidePrev());
    nextElem.current.addEventListener('click', () => swiper.slideNext());
  }, [swiper]);

  return (
    <div className={style.slider}>
      <div className='container'>
        <div className={style.sliderBody}>
          <div ref={prevElem} className={style.sliderBody__prev}></div>
          <div ref={nextElem} className={style.sliderBody__next}></div>
          <Swiper
            modules={[Navigation, EffectCustom]}
            effect={'cards'}
            grabCursor={true}
            className={`${style.sliderBody__item} _team-slider`}
            initialSlide='6'
            navigation={{
              prevEl: '._team-swiper-prev',
              nextEl: '._team-swiper-next',
            }}
            onProgress={(swiper, progress) =>
              console.log(swiper.slides, progress)
            }
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            <SwiperSlide>
              <div className={style.card}>
                <a
                  href='https://twitter.com/xkvzwzbvy9'
                  target={'_blank'}
                  rel='noreferrer'
                  className={style.card__img}
                >
                  <ImgWebp lazy src={che} src2x={che2x} srcWebp={cheWebp} />
                </a>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  che
                  <span>che</span>
                </div>
                <div className={style.card__pos}>Community Moderator</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.card} ${style._james}`}>
                <a
                  href='https://twitter.com/pikamoonarmy?s=21'
                  target={'_blank'}
                  rel='noreferrer'
                  className={style.card__img}
                >
                  <ImgWebp
                    lazy
                    src={james}
                    src2x={james2x}
                    srcWebp={jamesWebp}
                  />
                </a>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  james
                  <span>james</span>
                </div>
                <div className={style.card__pos}>influencer Manager</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.card} ${style._kolawolu}`}>
                <a
                  href='https://www.linkedin.com/in/kolawolu-odunola'
                  target={'_blank'}
                  rel='noreferrer'
                  className={style.card__img}
                >
                  <ImgWebp
                    lazy
                    src={kolawolu}
                    src2x={kolawolu2x}
                    srcWebp={kolawoluWebp}
                  />
                </a>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  Kolawolu
                  <span>Kolawolu</span>
                </div>
                <div className={style.card__pos}>advisor</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.card}>
                <a
                  href='https://t.me/notequal21'
                  target={'_blank'}
                  rel='noreferrer'
                  className={style.card__img}
                >
                  <ImgWebp
                    lazy
                    src={kirill}
                    src2x={kirill2x}
                    srcWebp={kirillWebp}
                  />
                </a>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  Kirill
                  <span>Kirill</span>
                </div>
                <div className={style.card__pos}>frontend developer</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.card}>
                <a
                  href='https://t.me/eddyman997'
                  target={'_blank'}
                  rel='noreferrer'
                  className={style.card__img}
                >
                  <ImgWebp
                    lazy
                    src={edgar}
                    src2x={edgar2x}
                    srcWebp={edgarWebp}
                  />
                </a>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  Edgar
                  <span>Edgar</span>
                </div>
                <div className={style.card__pos}>web ui/ux</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.card} ${style._second}`}>
                <a
                  href='https://twitter.com/brockpikamoon'
                  target={'_blank'}
                  rel='noreferrer'
                  className={style.card__img}
                >
                  <ImgWebp
                    lazy
                    src={brock}
                    src2x={brock2x}
                    srcWebp={brockWebp}
                  />
                </a>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  Brock
                  <span>Brock</span>
                </div>
                <div className={style.card__pos}>Co founder</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.card} ${style._main}`}>
                <a
                  href='https://twitter.com/NickcryptOOO'
                  target={'_blank'}
                  rel='noreferrer'
                  className={style.card__img}
                >
                  <ImgWebp lazy src={nix} src2x={nix2x} srcWebp={nixWebp} />
                </a>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  Nix
                  <span>Nix</span>
                </div>
                <div className={style.card__pos}>Co founder</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.card} ${style._second} ${style._kanto}`}>
                <div className={style.card__img}>
                  <ImgWebp
                    lazy
                    src={kanto}
                    src2x={kanto2x}
                    srcWebp={kantoWebp}
                  />
                </div>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  kanto
                  <span>kanto</span>
                </div>
                <div className={style.card__pos}>Co founder</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.card}>
                <a
                  href='https://www.linkedin.com/in/andrequeirozcosta/'
                  target={'_blank'}
                  rel='noreferrer'
                  className={style.card__img}
                >
                  <ImgWebp
                    lazy
                    src={andre}
                    src2x={andre2x}
                    srcWebp={andreWebp}
                  />
                </a>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  andre
                  <span>andre</span>
                </div>
                <div className={style.card__pos}>Blockchain Developer</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.card}>
                <a
                  href='https://www.oscarwritesgames.com/'
                  target={'_blank'}
                  rel='noreferrer'
                  className={style.card__img}
                >
                  <ImgWebp
                    lazy
                    src={oscar}
                    src2x={oscar2x}
                    srcWebp={oscarWebp}
                  />
                </a>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  oscar
                  <span>oscar</span>
                </div>
                <div className={style.card__pos}>Game Design</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.card}>
                <a
                  href='https://www.behance.net/fujhine'
                  target={'_blank'}
                  rel='noreferrer'
                  className={style.card__img}
                >
                  <ImgWebp lazy src={arri} src2x={arri2x} srcWebp={arriWebp} />
                </a>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  arri
                  <span>arri</span>
                </div>
                <div className={style.card__pos}>Illustrator</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.card}>
                <a
                  href='https://twitter.com/thakid9015'
                  target={'_blank'}
                  rel='noreferrer'
                  className={style.card__img}
                >
                  <ImgWebp
                    lazy
                    src={florin}
                    src2x={florin2x}
                    srcWebp={florinWebp}
                  />
                </a>
                <div
                  className={`${style.card__name} title title_md title_shadow`}
                >
                  florin
                  <span>florin</span>
                </div>
                <div className={style.card__pos}>Community Moderator</div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={style.sliderBody__nav}>
            <div className={`${style.sliderBody__navBtn} _team-swiper-prev`}>
              {arrow()}
            </div>
            <div className={`${style.sliderBody__navBtn} _team-swiper-next`}>
              {arrow()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
