import style from './Roadmap.module.scss';
import { useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.scss';

// img imports
import arrow from '@assets/img/home/slider/arrow';
import img1 from '@assets/img/home/roadmap/img1.jpg';
import img2 from '@assets/img/home/roadmap/img2.jpg';
import img3 from '@assets/img/home/roadmap/img3.jpg';
import img4 from '@assets/img/home/roadmap/img4.jpg';
import img5 from '@assets/img/home/roadmap/img5.jpg';
import img6 from '@assets/img/home/roadmap/img6.jpg';

const Roadmap = () => {
  const main = useRef();

  return (
    <div ref={main} className={style.roadmap}>
      <div id='roadmap' className='container'>
        <div id='panels' className={`${style.roadmap__title} title_lg`}>
          roadmap
        </div>
        <div className={`${style.roadmapBody} _slider-roadmap`}>
          <Swiper
            modules={[Navigation]}
            grabCursor
            slidesPerView={'auto'}
            spaceBetween={18}
            id='panels-container'
            className={style.roadmapBody__row}
            navigation={{
              prevEl: '._slider-roadmap-prev',
              nextEl: '._slider-roadmap-next',
            }}
          >
            <SwiperSlide>
              <div className={`${style.roadmapBody__item} panel`}>
                {/* <ImgWebp src={img1} src2x={img1_2x} srcWebp={img1Webp} /> */}
                <img src={img1} alt='' />
                <div className={style.roadmapBody__itemTitle}>
                  Vision & Values
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.roadmapBody__item} panel`}>
                {/* <ImgWebp src={img2} src2x={img2_2x} srcWebp={img2Webp} /> */}
                <img src={img2} alt='' />
                <div className={style.roadmapBody__itemTitle}>Community</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.roadmapBody__item} panel`}>
                {/* <ImgWebp src={img3} src2x={img3_2x} srcWebp={img3Webp} /> */}
                <img src={img3} alt='' />
                <div className={style.roadmapBody__itemTitle}>Partnership</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.roadmapBody__item} panel`}>
                {/* <ImgWebp src={img4} src2x={img4_2x} srcWebp={img4Webp} /> */}
                <img src={img4} alt='' />
                <div className={style.roadmapBody__itemTitle}>Metaverse</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.roadmapBody__item} panel`}>
                {/* <ImgWebp src={img5} src2x={img5_2x} srcWebp={img5Webp} /> */}
                <img src={img5} alt='' />
                <div className={style.roadmapBody__itemTitle}>
                  Online Gameplay
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.roadmapBody__item} panel`}>
                {/* <ImgWebp src={img6} src2x={img6_2x} srcWebp={img6Webp} /> */}
                <img src={img6} alt='' />
                <div className={style.roadmapBody__itemTitle}>Longevity</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={style.roadmapBtns}>
          <div className={`${style.roadmapBtns__item} _slider-roadmap-prev`}>
            {arrow()}
          </div>
          <div className={`${style.roadmapBtns__item} _slider-roadmap-next`}>
            {arrow()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
