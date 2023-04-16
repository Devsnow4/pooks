import style from './Home.module.scss';
import Button from '../../components/Button/Button';
import { useMediaQuery } from 'usehooks-ts';
import { ImgWebp } from '../../helpers/imgwebp';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';
import imageMapResizerMin from 'image-map-resizer';
import Partners from './modules/Partners/Partners';
import TeamSlider from './modules/TeamSlider/TeamSlider';
import Roadmap from './modules/Roadmap/Roadmap';

// img import
import MainPng from '@assets/img/home/main/img.png';
import MainPng2x from '@assets/img/home/main/img@2x.png';
import MainWebp from '@assets/img/home/main/img.webp';
import MainPngMobile from '@assets/img/home/main/img-mobile.png';
import MainWebpMobile from '@assets/img/home/main/img-mobile.webp';
import MainPng2xMobile from '@assets/img/home/main/img-mobile.png';
import TokensPng from '@assets/img/home/cards/tokens.png';
import TokensPng2x from '@assets/img/home/cards/tokens@2x.png';
import TokensWebp from '@assets/img/home/cards/tokens.webp';
import MarketplacePng from '@assets/img/home/cards/marketplace.png';
import MarketplacePng2x from '@assets/img/home/cards/marketplace@2x.png';
import MarketplaceWebp from '@assets/img/home/cards/marketplace.webp';
import PikaversePng from '@assets/img/home/cards/pikaverse.png';
import PikaversePng2x from '@assets/img/home/cards/pikaverse@2x.png';
import PikaverseWebp from '@assets/img/home/cards/pikaverse.webp';
import NftPng from '@assets/img/home/cards/nft.png';
import NftPng2x from '@assets/img/home/cards/nft@2x.png';
import NftWebp from '@assets/img/home/cards/nft.webp';
import TokensPngMobile from '@assets/img/home/cards/tokens-mobile.png';
import TokensPngMobile2x from '@assets/img/home/cards/tokens-mobile@2x.png';
import TokensWebpMobile from '@assets/img/home/cards/tokens-mobile.webp';
import MarketplacePngMobile from '@assets/img/home/cards/marketplace-mobile.png';
import MarketplacePngMobile2x from '@assets/img/home/cards/marketplace-mobile@2x.png';
import MarketplaceWebpMobile from '@assets/img/home/cards/marketplace-mobile.webp';
import PikaversePngMobile from '@assets/img/home/cards/pikaverse-mobile.png';
import PikaversePngMobile2x from '@assets/img/home/cards/pikaverse-mobile@2x.png';
import PikaverseWebpMobile from '@assets/img/home/cards/pikaverse-mobile.webp';
import NftPngMobile from '@assets/img/home/cards/nft-mobile.png';
import NftPngMobile2x from '@assets/img/home/cards/nft-mobile@2x.png';
import NftWebpMobile from '@assets/img/home/cards/nft-mobile.webp';
import FeaturedIco04 from '@assets/img/home/featured/ico04.png';
import FeaturedIco04_2x from '@assets/img/home/featured/ico04@2x.png';
import FeaturedIco04Webp from '@assets/img/home/featured/ico04.webp';
import FeaturedIco05 from '@assets/img/home/featured/ico05.png';
import FeaturedIco05_2x from '@assets/img/home/featured/ico05@2x.png';
import FeaturedIco05Webp from '@assets/img/home/featured/ico05.webp';
import FeaturedIco06 from '@assets/img/home/featured/ico06.png';
import AuditedIco02 from '@assets/img/home/audited/ico02.png';
import AuditedIco02_2x from '@assets/img/home/audited/ico02@2x.png';
import AuditedIco02Webp from '@assets/img/home/audited/ico02.webp';
import AuditedIco03 from '@assets/img/home/audited/ico03.png';
import AuditedIco03_2x from '@assets/img/home/audited/ico03@2x.png';
import AuditedIco03Webp from '@assets/img/home/audited/ico03.webp';
import JoinImg from '@assets/img/home/join/img.png';
import JoinImg2x from '@assets/img/home/join/img@2x.png';
import JoinImgWebp from '@assets/img/home/join/img.webp';
import JoinImgMobile from '@assets/img/home/join/img-mobile.png';
import JoinImgMobile2x from '@assets/img/home/join/img-mobile@2x.png';
import JoinImgMobileWebp from '@assets/img/home/join/img-mobile.webp';
import PikamoonImg from '@assets/img/home/pikamoon/img.png';
import PikamoonImg2x from '@assets/img/home/pikamoon/img@2x.png';
import PikamoonImgWebp from '@assets/img/home/pikamoon/img.webp';
import PikamoonImgMobile from '@assets/img/home/pikamoon/img-mobile.png';
import PikamoonImgMobile2x from '@assets/img/home/pikamoon/img-mobile@2x.png';
import PikamoonImgMobileWebp from '@assets/img/home/pikamoon/img-mobile.webp';
import MapImg from '@assets/img/home/map/map.png';
import MapImg2x from '@assets/img/home/map/map@2x.png';
import MapImgWebp from '@assets/img/home/map/map.webp';
import MapImg01 from '@assets/img/home/map/img01.png';
import MapImg01_2x from '@assets/img/home/map/img01@2x.png';
import MapImg01Webp from '@assets/img/home/map/img01.webp';
import MapImg02 from '@assets/img/home/map/img02.png';
import MapImg02_2x from '@assets/img/home/map/img02@2x.png';
import MapImg02Webp from '@assets/img/home/map/img02.webp';
import MapImg03 from '@assets/img/home/map/img03.png';
import MapImg03_2x from '@assets/img/home/map/img03@2x.png';
import MapImg03Webp from '@assets/img/home/map/img03.webp';
import MapImg04 from '@assets/img/home/map/img04.png';
import MapImg04Webp from '@assets/img/home/map/img04.webp';
import MapEarthHover2 from '@assets/img/home/map/hover_earth2.png';
import MapEarthHover2Webp from '@assets/img/home/map/hover_earth2.webp';
import MapWaterHover2 from '@assets/img/home/map/hover_water2.png';
import MapWaterHover2Webp from '@assets/img/home/map/hover_water2.webp';
import MapFireHover2 from '@assets/img/home/map/hover_fire2.png';
import MapFireHover2Webp from '@assets/img/home/map/hover_fire2.webp';
import MapElectricHover2 from '@assets/img/home/map/hover_electric2.png';
import MapElectricHover2Webp from '@assets/img/home/map/hover_electric2.webp';
import CloseSvg from '@assets/img/home/map/CloseSvg';

const Home = () => {
  const navigate = useNavigate();
  const main = useRef();

  const toPage = (page) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    return navigate(`${page}`);
  };

  return (
    <>
      <MainScreen toPage={toPage} />
      <JoinScreen toPage={toPage} />
      <FeaturedScreen toPage={toPage} />
      <CardsScreen toPage={toPage} />
      <MapScreen />
      <AuditedScreen />
      <Partners />
      <TeamSlider />
      <Roadmap elem={main} />
      <PikamoonScreen toPage={toPage} />
    </>
  );
};

const MainScreen = ({ toPage }) => {
  const isMobile = useMediaQuery('(max-width:767px)');

  const { t } = useTranslation();

  return (
    <div className={style.main}>
      <h1 className={style.pageDescr}>
        NFT Play to Earn game in Unreal Engine 5. Battle your way up the ranks
        to earn rewards in the Pikaverse!
      </h1>
      <div className='container'>
        <div className={style.mainBody}>
          <div className={style.mainBody__text}>
            <div className={`${style.mainBody__textTitle} title_md`}>
              {t('home.main.title')}
            </div>
            <div className={`${style.mainBody__textDescr} text`}>
              {t('home.main.subtitle')}
            </div>
            <div className={`${style.mainBody__textBtns}`}>
              <Button
                onClick={() => toPage('giveaway')}
                className={`${style.mainBody__textBtn}`}
                title={t('btn.join.giveaway')}
              />
              <Button
                href='https://docs.pikamoon.io'
                target={'_blank'}
                className={`${style.mainBody__textBtn}`}
                title={t('btn.read')}
              />
            </div>
            <div className={`${style.mainBody__textBtn}`}></div>
          </div>
          <div className={style.mainBody__img}>
            <ImgWebp
              src={isMobile ? MainPngMobile : MainPng}
              src2x={isMobile ? MainPng2xMobile : MainPng2x}
              srcWebp={isMobile ? MainWebpMobile : MainWebp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardsScreen = ({ toPage }) => {
  const isMobile = useMediaQuery('(max-width:992px)');

  const { t } = useTranslation();

  if (!isMobile) {
    return (
      <div className={style.cards}>
        <div className='container'>
          <div className={style.cardsBody}>
            <div className={style.cardsBody__item}>
              <div className={style.cardsBody__info}>
                <div className={`${style.cardsBody__infoTitle} title_xs`}>
                  {t('home.cards.title01')}
                </div>
                <div className={`${style.cardsBody__infoText} text text_20`}>
                  <p>{t('home.cards.text01.p1')}</p>
                  <p>{t('home.cards.text01.p2')}</p>
                </div>
                <Button
                  onClick={() => toPage('giveaway')}
                  title={t('btn.claim')}
                  className={style.cardsBody__infoBtn}
                />
              </div>
              <div className={style.cardsBody__img}>
                {/* <img src={TokensPng} alt="" /> */}
                <ImgWebp
                  src={TokensPng}
                  src2x={TokensPng2x}
                  srcWebp={TokensWebp}
                />
              </div>
            </div>
            <div className={`${style.cardsBody__item} ${style._small}`}>
              <div className={style.cardsBody__info}>
                <div className={`${style.cardsBody__infoTitle} title_xs`}>
                  {t('home.cards.title03')}
                </div>
                <div className={`${style.cardsBody__infoText} text_sm`}>
                  <div className={`${style.shape}`}></div>
                  <div className={`${style.wrapper}`}>
                    <p>{t('home.cards.text03.p1')}</p>
                    <p>{t('home.cards.text03.p2')}</p>
                    <p>{t('home.cards.text03.p3')}</p>
                  </div>
                </div>
                <Button className={style.cardsBody__infoBtn} isCommingSoon />
              </div>
              <div className={style.cardsBody__img}>
                {/* <img src={MarketplacePng} alt="" /> */}
                <ImgWebp
                  src={MarketplacePng}
                  src2x={MarketplacePng2x}
                  srcWebp={MarketplaceWebp}
                />
              </div>
            </div>
            <div className={`${style.cardsBody__item} ${style._small}`}>
              <div className={style.cardsBody__info}>
                <div className={`${style.cardsBody__infoTitle} title_xs`}>
                  {t('home.cards.title04')}
                </div>
                <div className={`${style.cardsBody__infoText} text_sm`}>
                  <div className={style.shape}></div>
                  <div className={style.wrapper}>
                    <p>{t('home.cards.text04.p1')}</p>
                    <p>{t('home.cards.text04.p2')}</p>
                  </div>
                </div>
                <a href='https://linktr.ee/pikamoon'>
                  <Button
                    className={style.cardsBody__infoBtn}
                    title={t('btn.followus')}
                  />
                </a>
              </div>
              <div className={style.cardsBody__img}>
                {/* <img src={PikaversePng} alt="" /> */}
                <ImgWebp
                  src={PikaversePng}
                  src2x={PikaversePng2x}
                  srcWebp={PikaverseWebp}
                />
              </div>
            </div>
            <div className={style.cardsBody__item}>
              <div className={style.cardsBody__info}>
                <div className={`${style.cardsBody__infoTitle} title_xs`}>
                  {t('home.cards.title02')}
                </div>
                <div className={`${style.cardsBody__infoText} text text_20`}>
                  <p>{t('home.cards.text02.p1')}</p>
                  <p>{t('home.cards.text02.p2')}</p>
                  <p>{t('home.cards.text02.p3')}</p>
                  <p>{t('home.cards.text02.p4')}</p>
                </div>
                <Button
                  onClick={() => toPage('pikaverse')}
                  title={t('btn.claimfree')}
                  className={style.cardsBody__infoBtn}
                />
              </div>
              <div className={style.cardsBody__img}>
                {/* <img src={NftPng} alt="" /> */}
                <ImgWebp src={NftPng} src2x={NftPng2x} srcWebp={NftWebp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.cards}>
        <div className='container'>
          <div className={style.cardsBody}>
            <div className={style.cardsBody__item}>
              <div className={`${style.cardsBody__infoTitle} title_sm`}>
                {t('home.cards.title01')}
              </div>
              <div className={`${style.cardsBody__infoText} text`}>
                <p>{t('home.cards.text01.p1')}</p>
                <p>{t('home.cards.text01.p2')}</p>
              </div>
              <div className={style.cardsBody__img}>
                {/* <img src={TokensPngMobile} alt="" /> */}
                <ImgWebp
                  src={TokensPngMobile}
                  src2x={TokensPngMobile2x}
                  srcWebp={TokensWebpMobile}
                />
              </div>
              <Button
                onClick={() => toPage('giveaway')}
                title={t('btn.claim')}
                className={style.cardsBody__infoBtn}
              />
            </div>
            <div className={`${style.cardsBody__item} ${style._small}`}>
              <div className={`${style.cardsBody__infoTitle} title_xs`}>
                {t('home.cards.title03')}
              </div>
              <div className={`${style.cardsBody__infoText} text_sm`}>
                <p>{t('home.cards.text03.p1')}</p>
                <p>{t('home.cards.text03.p2')}</p>
                <p>{t('home.cards.text03.p3')}</p>
              </div>
              <div className={style.cardsBody__img}>
                {/* <img src={MarketplacePngMobile} alt="" /> */}
                <ImgWebp
                  src={MarketplacePngMobile}
                  src2x={MarketplacePngMobile2x}
                  srcWebp={MarketplaceWebpMobile}
                />
              </div>
              <Button className={style.cardsBody__infoBtn} isCommingSoon />
            </div>
            <div className={`${style.cardsBody__item} ${style._small}`}>
              <div className={`${style.cardsBody__infoTitle} title_xs`}>
                {t('home.cards.title04')}
              </div>
              <div className={`${style.cardsBody__infoText} text_sm`}>
                <p>{t('home.cards.text04.p1')}</p>
                <p>{t('home.cards.text04.p2')}</p>
              </div>
              <div className={style.cardsBody__img}>
                {/* <img src={PikaversePngMobile} alt="" /> */}
                <ImgWebp
                  src={PikaversePngMobile}
                  src2x={PikaversePngMobile2x}
                  srcWebp={PikaverseWebpMobile}
                />
              </div>
              <a href='https://linktr.ee/pikamoon'>
                <Button
                  className={style.cardsBody__infoBtn}
                  title={t('btn.followus')}
                />
              </a>
            </div>
            <div className={style.cardsBody__item}>
              <div className={`${style.cardsBody__infoTitle} title_sm`}>
                {t('home.cards.title02')}
              </div>
              <div className={`${style.cardsBody__infoText} text`}>
                <p>{t('home.cards.text02.p1')}</p>
                <p>{t('home.cards.text02.p2')}</p>
                <p>{t('home.cards.text02.p3')}</p>
                <p>{t('home.cards.text02.p4')}</p>
              </div>
              <div className={style.cardsBody__img}>
                <ImgWebp
                  src={NftPngMobile}
                  src2x={NftPngMobile2x}
                  srcWebp={NftWebpMobile}
                />
              </div>
              <Button
                onClick={() => toPage('pikaverse')}
                title={t('btn.how')}
                className={style.cardsBody__infoBtn}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const FeaturedScreen = ({ toPage }) => {
  const { t } = useTranslation();
  return (
    <div className={style.featured}>
      <div className='container'>
        <div className={`${style.featured__title} title_lg`}>
          {t('home.featured.title')}
        </div>
        <div className={style.featuredBody}>
          <a
            href='https://www.spacemoney.com.br/geral/por-que-pikamoon-sera-a-melhor-criptomoeda-gamefi-de-2023/189322/'
            target={'_blank'}
            className={style.featuredBody__item}
          >
            <ImgWebp
              src={FeaturedIco04}
              src2x={FeaturedIco04_2x}
              srcWebp={FeaturedIco04Webp}
            />
          </a>
          <a
            href='https://blockchainmedia.id/inilah-crypto-token-play-to-earn-pikamoon-untuk-komunitas-gamefi/'
            target={'_blank'}
            className={style.featuredBody__item}
          >
            <ImgWebp
              src={FeaturedIco05}
              src2x={FeaturedIco05_2x}
              srcWebp={FeaturedIco05Webp}
            />
          </a>
          <a
            href='https://www.crypto-news-flash.com/pikamoon-crypto-presale-why-this-play-to-earn-game-will-surpass-expectations-in-2023/'
            target={'_blank'}
            className={style.featuredBody__item}
          >
            <img src={FeaturedIco06} alt='' />
          </a>
        </div>
        <div className={style.featuredBottom}>
          <Button
            onClick={() => toPage('giveaway')}
            title={t('btn.whitelist100k')}
            className={style.featured__btn}
          />
        </div>
      </div>
    </div>
  );
};

const JoinScreen = ({ toPage }) => {
  const isMobile = useMediaQuery('(max-width:992px)');

  const { t } = useTranslation();

  if (!isMobile) {
    return (
      <div id='about' className={style.join}>
        <div className='container'>
          <div className={style.joinBody}>
            <div className={`${style.joinBody__title} title_lg`}>
              {t('home.join.title')}
            </div>
            <div className={style.joinBody__content}>
              <div className={style.joinBody__img}>
                {/* <img src={JoinImg} alt="" /> */}
                <ImgWebp
                  src={JoinImg}
                  src2x={JoinImg2x}
                  srcWebp={JoinImgWebp}
                />
              </div>
              <div className={`${style.joinBody__text} text text_20`}>
                <p>{t('home.join.p1')}</p>
                <p>{t('home.join.p2')}</p>
                <p>{t('home.join.p3')}</p>
                <Button
                  onClick={() => toPage('giveaway')}
                  title={t('btn.join')}
                  className={style.joinBody__btn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id='about' className={style.join}>
        <div className='container'>
          <div className={style.joinBody}>
            <div className={`${style.joinBody__title} title_lg`}>
              {t('home.join.title')}
            </div>

            <div className={`${style.joinBody__text} text`}>
              <p>{t('home.join.p1')}</p>
              <p>{t('home.join.p2')}</p>
              <p>{t('home.join.p3')}</p>
            </div>
            <div className={style.joinBody__img}>
              {/* <img src={JoinImgMobile} alt="" /> */}
              <ImgWebp
                src={JoinImgMobile}
                src2x={JoinImgMobile2x}
                srcWebp={JoinImgMobileWebp}
              />
            </div>
            <Button
              onClick={() => toPage('giveaway')}
              title='join whitelist'
              className={style.joinBody__btn}
            />
          </div>
        </div>
      </div>
    );
  }
};

const MapScreen = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const { t } = useTranslation();
  const earchHover = useRef();
  const waterHover = useRef();
  const fireHover = useRef();
  const electricHover = useRef();
  const earthModal = useRef();
  const waterModal = useRef();
  const fireModal = useRef();
  const electricModal = useRef();

  const activateEarthModal = () => {
    // earchModal.current.classList.add(style.active)
    earchHover.current.classList.add(style.active);
  };
  const deactivateEarthModal = () => {
    // earchModal.current.classList.remove(style.active)
    earchHover.current.classList.remove(style.active);
  };

  const activateWaterModal = () => {
    waterHover.current.classList.add(style.active);
  };
  const deactivateWaterModal = () => {
    waterHover.current.classList.remove(style.active);
  };

  const activateFireModal = () => {
    fireHover.current.classList.add(style.active);
  };
  const deactivateFireModal = () => {
    fireHover.current.classList.remove(style.active);
  };

  const activateElectricModal = () => {
    electricHover.current.classList.add(style.active);
  };
  const deactivateElectricModal = () => {
    electricHover.current.classList.remove(style.active);
  };

  const toggleModal = (e, name) => {
    e.preventDefault();
    if (
      earthModal.current.classList.contains(style.active) &&
      earthModal !== name
    ) {
      earthModal.current.classList.remove(style.active);
    }
    if (
      waterModal.current.classList.contains(style.active) &&
      waterModal !== name
    ) {
      waterModal.current.classList.remove(style.active);
    }
    if (
      fireModal.current.classList.contains(style.active) &&
      fireModal !== name
    ) {
      fireModal.current.classList.remove(style.active);
    }
    if (
      electricModal.current.classList.contains(style.active) &&
      electricModal !== name
    ) {
      electricModal.current.classList.remove(style.active);
    }
    if (name.current.classList.contains(style.active)) {
      name.current.classList.remove(style.active);
    } else {
      name.current.classList.add(style.active);
    }
  };

  const closeModal = (e) => {
    e.preventDefault();
    if (earthModal.current.classList.contains(style.active)) {
      earthModal.current.classList.remove(style.active);
    }
    if (waterModal.current.classList.contains(style.active)) {
      waterModal.current.classList.remove(style.active);
    }
    if (fireModal.current.classList.contains(style.active)) {
      fireModal.current.classList.remove(style.active);
    }
    if (electricModal.current.classList.contains(style.active)) {
      electricModal.current.classList.remove(style.active);
    }
  };

  useEffect(() => {
    imageMapResizerMin();
  });

  if (isMobile) {
    return (
      <div className={style.map}>
        <div className='container'>
          <div className={style.mapBody}>
            <div
              ref={earthModal}
              className={`${style.mapModal} ${style._earth}`}
            >
              <div
                className={`
              ${style.mapModal__body}`}
              >
                <div
                  onClick={(e) => closeModal(e)}
                  className={style.mapModal__close}
                >
                  {CloseSvg()}
                </div>
                <div className={style.mapModal__title}>
                  {t('map.modal.earth.title')}
                </div>
                <div className={style.mapModal__text}>
                  {t('map.modal.earth.text')}
                </div>
              </div>
            </div>
            <div
              ref={waterModal}
              className={`${style.mapModal} ${style._water}`}
            >
              <div className={`${style.mapModal__body}`}>
                <div
                  onClick={(e) => closeModal(e)}
                  className={style.mapModal__close}
                >
                  {CloseSvg()}
                </div>
                <div className={style.mapModal__title}>
                  {t('map.modal.water.title')}
                </div>
                <div className={style.mapModal__text}>
                  {t('map.modal.water.text')}
                </div>
              </div>
            </div>
            <div ref={fireModal} className={`${style.mapModal} ${style._fire}`}>
              <div className={`${style.mapModal__body}`}>
                <div
                  onClick={(e) => closeModal(e)}
                  className={style.mapModal__close}
                >
                  {CloseSvg()}
                </div>
                <div className={style.mapModal__title}>
                  {t('map.modal.fire.title')}
                </div>
                <div className={style.mapModal__text}>
                  {t('map.modal.fire.text')}
                </div>
              </div>
            </div>
            <div
              ref={electricModal}
              className={`${style.mapModal}  ${style._electric}`}
            >
              <div className={`${style.mapModal__body}`}>
                <div
                  onClick={(e) => closeModal(e)}
                  className={style.mapModal__close}
                >
                  {CloseSvg()}
                </div>
                <div className={style.mapModal__title}>
                  {t('map.modal.electric.title')}
                </div>
                <div className={style.mapModal__text}>
                  {t('map.modal.electric.text')}
                </div>
              </div>
            </div>

            <ImgWebp
              usemap='#image-map-mobile'
              src={MapImg}
              src2x={MapImg2x}
              srcWebp={MapImgWebp}
            />
            <map name='image-map-mobile'>
              <area
                onClick={(e) => toggleModal(e, waterModal)}
                target=''
                alt='water'
                title='water'
                href='#'
                coords='618,647,576,658,564,712,611,718,702,721,906,725,1035,716,1047,657,1044,447,928,483,835,490,745,494,756,554,734,590,683,604,653,633'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, fireModal)}
                target=''
                alt='fire'
                title='fire'
                href='#'
                coords='707,269,569,350,564,382,589,403,579,453,586,498,641,529,698,548,736,559,742,519,711,477,723,472,736,470,773,479,814,481,841,460,884,467,913,472,929,468,932,453,968,455,985,419,1032,414,1040,395,1044,374,1029,358,1006,342,1002,327,1019,299,1003,277,983,261,953,215,932,192,906,190,901,205,888,214,887,221,866,225,860,231,818,238,801,255,794,265,753,273,732,275'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, electricModal)}
                target=''
                alt='electric'
                title='electric'
                href='#'
                coords='736,561,719,583,678,587,661,596,642,618,616,641,569,649,551,663,558,673,545,687,515,685,478,678,430,684,413,664,405,652,351,650,335,636,303,538,374,420,418,386,425,357,450,352,462,358,476,382,534,405,555,450,575,468,586,499,636,525'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, electricModal)}
                target=''
                alt='electric'
                title='electric'
                href='#'
                coords='224,271,391,307,386,335,405,344,397,394,371,405,277,548,276,592,300,615,301,649,284,698,257,695,222,707,158,696,74,704,52,699,35,671,16,596,33,584,27,553,33,548,33,525,45,506,24,452,35,435,32,383,73,362,117,364,130,381,130,403,137,415,143,439,154,425,130,372,152,351,171,339,183,330,200,305'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, earthModal)}
                target=''
                alt='earth'
                title='earth'
                href='#'
                coords='390,333,409,327,424,280,425,260,414,248,427,247,439,226,433,184,390,164,412,107,370,82,346,56,324,17,310,10,290,30,272,36,243,38,231,26,158,30,133,42,133,62,142,75,138,102,126,100,125,89,128,66,110,61,90,62,90,87,93,108,80,122,92,151,107,155,141,152,161,149,164,160,142,158,136,168,121,173,116,165,101,169,85,159,69,156,63,168,45,187,44,213,51,236,64,243,66,258,72,277,77,295,99,308,133,299,163,302,185,303,195,293,199,276,195,261,210,256,228,251,223,272,389,308'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, earthModal)}
                target=''
                alt='earth'
                title='earth'
                href='#'
                coords='562,380,566,350,709,269,706,254,728,241,753,238,751,256,785,259,794,259,814,239,856,232,883,220,898,203,901,187,936,189,952,209,973,241,993,243,1005,219,983,188,954,176,982,170,965,121,948,111,935,23,831,5,819,44,783,63,782,76,722,94,714,132,687,144,677,204,644,211,610,207,593,215,562,201,534,213,498,208,461,209,436,266,428,308,445,343,516,360'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, waterModal)}
                target=''
                alt='water'
                title='water'
                href='#'
                coords='678,202,683,150,677,134,668,113,663,106,645,88,638,72,625,54,617,39,602,28,576,29,545,31,517,37,502,34,491,42,470,52,457,75,445,99,436,108,430,131,431,145,429,158,429,169,436,182,444,207,446,242,465,209,500,209,529,214,561,200,593,216,638,213,662,208,670,208'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, waterModal)}
                target=''
                alt='water'
                title='water'
                href='#'
                coords='436,232,447,242,434,265,432,287,429,306,439,331,450,348,497,355,541,370,567,384,586,402,580,446,579,464,560,451,538,404,476,382,460,355,438,354,425,356,416,386,375,418,303,538,335,636,403,654,425,685,285,698,301,645,300,616,276,592,278,548,371,406,397,395,406,347,392,336,410,329,423,282,426,261,409,248,424,248'
                shape='poly'
              />
            </map>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.map}>
        <div className='container'>
          <div onMouseLeave={closeModal} className={style.mapBody}>
            <div
              onClick={(e) => closeModal(e, earthModal)}
              onMouseEnter={activateEarthModal}
              onMouseLeave={deactivateEarthModal}
              ref={earthModal}
              className={style.mapModal}
            >
              <div className={`${style.mapModal__body}`}>
                <div className={style.mapModal__title}>
                  {t('map.modal.earth.title')}
                </div>
                <div className={style.mapModal__text}>
                  {t('map.modal.earth.text')}
                </div>
                <div className={style.mapModal__img}>
                  <ImgWebp
                    src={MapImg01}
                    src2x={MapImg01_2x}
                    srcWebp={MapImg01Webp}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={(e) => closeModal(e, fireModal)}
              onMouseEnter={activateFireModal}
              onMouseLeave={deactivateFireModal}
              ref={fireModal}
              className={style.mapModal}
            >
              <div className={`${style.mapModal__body}`}>
                <div className={style.mapModal__title}>
                  {t('map.modal.fire.title')}
                </div>
                <div className={style.mapModal__text}>
                  {t('map.modal.fire.text')}
                </div>
                <div className={style.mapModal__img}>
                  <ImgWebp
                    src={MapImg04}
                    src2x={MapImg04}
                    srcWebp={MapImg04Webp}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={(e) => closeModal(e, waterModal)}
              onMouseEnter={activateWaterModal}
              onMouseLeave={deactivateWaterModal}
              ref={waterModal}
              className={style.mapModal}
            >
              <div className={`${style.mapModal__body}`}>
                <div className={style.mapModal__title}>
                  {t('map.modal.water.title')}
                </div>
                <div className={style.mapModal__text}>
                  {t('map.modal.water.text')}
                </div>
                <div className={style.mapModal__img}>
                  <ImgWebp
                    src={MapImg03}
                    src2x={MapImg03_2x}
                    srcWebp={MapImg03Webp}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={(e) => closeModal(e, electricModal)}
              onMouseEnter={activateElectricModal}
              onMouseLeave={deactivateElectricModal}
              ref={electricModal}
              className={`${style.mapModal} ${style._electric}`}
            >
              <div className={`${style.mapModal__body}`}>
                <div className={style.mapModal__title}>
                  {t('map.modal.electric.title')}
                </div>
                <div className={style.mapModal__text}>
                  {t('map.modal.electric.text')}
                </div>
                <div className={style.mapModal__img}>
                  <ImgWebp
                    src={MapImg02}
                    src2x={MapImg02_2x}
                    srcWebp={MapImg02Webp}
                  />
                </div>
              </div>
            </div>

            <div className={style.mapBody__hover}>
              <div
                ref={earchHover}
                className={`${style.mapBody__hoverItem} ${style.earth}`}
              >
                {/* <ImgWebp
                  src={MapEarthHover}
                  src2x={MapEarthHover2x}
                  srcWebp={MapEarthHoverWebp}
                /> */}
                <ImgWebp
                  src={MapEarthHover2}
                  src2x={MapEarthHover2}
                  srcWebp={MapEarthHover2Webp}
                />
              </div>
              <div
                ref={waterHover}
                className={`${style.mapBody__hoverItem} ${style.water}`}
              >
                {/* <ImgWebp
                  src={MapWaterHover}
                  src2x={MapWaterHover2x}
                  srcWebp={MapWaterHoverWebp}
                /> */}
                <ImgWebp
                  src={MapWaterHover2}
                  src2x={MapWaterHover2}
                  srcWebp={MapWaterHover2Webp}
                />
              </div>
              <div
                ref={fireHover}
                className={`${style.mapBody__hoverItem} ${style.fire}`}
              >
                {/* <ImgWebp
                  src={MapFireHover}
                  src2x={MapFireHover2x}
                  srcWebp={MapFireHoverWebp}
                /> */}
                <ImgWebp
                  src={MapFireHover2}
                  src2x={MapFireHover2}
                  srcWebp={MapFireHover2Webp}
                />
              </div>
              <div
                ref={electricHover}
                className={`${style.mapBody__hoverItem} ${style.electric}`}
              >
                {/* <ImgWebp
                  src={MapElectricHover}
                  src2x={MapElectricHover2x}
                  srcWebp={MapElectricHoverWebp}
                /> */}
                <ImgWebp
                  src={MapElectricHover2}
                  src2x={MapElectricHover2}
                  srcWebp={MapElectricHover2Webp}
                />
              </div>
            </div>

            <ImgWebp
              usemap='#image-map'
              src={MapImg}
              src2x={MapImg2x}
              srcWebp={MapImgWebp}
            />
            <map name='image-map'>
              <area
                onClick={(e) => toggleModal(e, waterModal)}
                onMouseEnter={activateWaterModal}
                onMouseLeave={deactivateWaterModal}
                target=''
                alt='water'
                title='water'
                href='#'
                coords='618,647,576,658,564,712,611,718,702,721,906,725,1035,716,1047,657,1044,447,928,483,835,490,745,494,756,554,734,590,683,604,653,633'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, fireModal)}
                onMouseEnter={activateFireModal}
                onMouseLeave={deactivateFireModal}
                target=''
                alt='fire'
                title='fire'
                href='#'
                coords='707,269,569,350,564,382,589,403,579,453,586,498,641,529,698,548,736,559,742,519,711,477,723,472,736,470,773,479,814,481,841,460,884,467,913,472,929,468,932,453,968,455,985,419,1032,414,1040,395,1044,374,1029,358,1006,342,1002,327,1019,299,1003,277,983,261,953,215,932,192,906,190,901,205,888,214,887,221,866,225,860,231,818,238,801,255,794,265,753,273,732,275'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, electricModal)}
                onMouseEnter={activateElectricModal}
                onMouseLeave={deactivateElectricModal}
                target=''
                alt='electric'
                title='electric'
                href='#'
                coords='736,561,719,583,678,587,661,596,642,618,616,641,569,649,551,663,558,673,545,687,515,685,478,678,430,684,413,664,405,652,351,650,335,636,303,538,374,420,418,386,425,357,450,352,462,358,476,382,534,405,555,450,575,468,586,499,636,525'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, electricModal)}
                onMouseEnter={activateElectricModal}
                onMouseLeave={deactivateElectricModal}
                target=''
                alt='electric'
                title='electric'
                href='#'
                coords='224,271,391,307,386,335,405,344,397,394,371,405,277,548,276,592,300,615,301,649,284,698,257,695,222,707,158,696,74,704,52,699,35,671,16,596,33,584,27,553,33,548,33,525,45,506,24,452,35,435,32,383,73,362,117,364,130,381,130,403,137,415,143,439,154,425,130,372,152,351,171,339,183,330,200,305'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, earthModal)}
                onMouseEnter={activateEarthModal}
                onMouseLeave={deactivateEarthModal}
                target=''
                alt='earth'
                title='earth'
                href='#'
                coords='390,333,409,327,424,280,425,260,414,248,427,247,439,226,433,184,390,164,412,107,370,82,346,56,324,17,310,10,290,30,272,36,243,38,231,26,158,30,133,42,133,62,142,75,138,102,126,100,125,89,128,66,110,61,90,62,90,87,93,108,80,122,92,151,107,155,141,152,161,149,164,160,142,158,136,168,121,173,116,165,101,169,85,159,69,156,63,168,45,187,44,213,51,236,64,243,66,258,72,277,77,295,99,308,133,299,163,302,185,303,195,293,199,276,195,261,210,256,228,251,223,272,389,308'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, earthModal)}
                onMouseEnter={activateEarthModal}
                onMouseLeave={deactivateEarthModal}
                target=''
                alt='earth'
                title='earth'
                href='#'
                coords='562,380,566,350,709,269,706,254,728,241,753,238,751,256,785,259,794,259,814,239,856,232,883,220,898,203,901,187,936,189,952,209,973,241,993,243,1005,219,983,188,954,176,982,170,965,121,948,111,935,23,831,5,819,44,783,63,782,76,722,94,714,132,687,144,677,204,644,211,610,207,593,215,562,201,534,213,498,208,461,209,436,266,428,308,445,343,516,360'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, waterModal)}
                onMouseEnter={activateWaterModal}
                onMouseLeave={deactivateWaterModal}
                target=''
                alt='water'
                title='water'
                href='#'
                coords='678,202,683,150,677,134,668,113,663,106,645,88,638,72,625,54,617,39,602,28,576,29,545,31,517,37,502,34,491,42,470,52,457,75,445,99,436,108,430,131,431,145,429,158,429,169,436,182,444,207,446,242,465,209,500,209,529,214,561,200,593,216,638,213,662,208,670,208'
                shape='poly'
              />
              <area
                onClick={(e) => toggleModal(e, waterModal)}
                onMouseEnter={activateWaterModal}
                onMouseLeave={deactivateWaterModal}
                target=''
                alt='water'
                title='water'
                href='#'
                coords='436,232,447,242,434,265,432,287,429,306,439,331,450,348,497,355,541,370,567,384,586,402,580,446,579,464,560,451,538,404,476,382,460,355,438,354,425,356,416,386,375,418,303,538,335,636,403,654,425,685,285,698,301,645,300,616,276,592,278,548,371,406,397,395,406,347,392,336,410,329,423,282,426,261,409,248,424,248'
                shape='poly'
              />
            </map>
          </div>
        </div>
      </div>
    );
  }
};

const AuditedScreen = () => {
  const { t } = useTranslation();

  return (
    <div className={`${style.featured} ${style.audited}`}>
      <div className='container'>
        <div className={`${style.featured__title} title_lg`}>
          {t('home.audited.title')}
        </div>
        <div className={style.featuredBody}>
          <a
            href='https://www.sharkteam.org/report/audit/20230404002C_en.pdf'
            target={'_blank'}
            className={style.featuredBody__item}
          >
            <ImgWebp
              src={AuditedIco03}
              src2x={AuditedIco03_2x}
              srcWebp={AuditedIco03Webp}
            />
          </a>
          <a
            href='https://coinsult.net/projects/pikamoon/'
            target={'_blank'}
            className={style.featuredBody__item}
          >
            <ImgWebp
              src={AuditedIco02}
              src2x={AuditedIco02_2x}
              srcWebp={AuditedIco02Webp}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const PikamoonScreen = ({ toPage }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const { t } = useTranslation();

  return (
    <div className={style.pikamoon}>
      <div className='container'>
        <div className={style.pikamoonBody}>
          <div className={style.pikamoonBody__text}>
            <div className={`${style.pikamoonBody__textTitle} title_lg`}>
              {t('home.pikamoon.title')}
            </div>
            <div className={`${style.pikamoonBody__textItem} text`}>
              {t('home.pikamoon.text')}
            </div>
            <div className={style.pikamoonBody__btns}>
              <Button
                href='https://docs.pikamoon.io'
                target={'_blank'}
                title={t('btn.whitepaper')}
                className={style.pikamoonBody__btnsItem}
              />
              <Button
                onClick={() => toPage('giveaway')}
                title={t('btn.giveaway2')}
                className={style.pikamoonBody__btnsItem}
              />
            </div>
          </div>
          <div className={style.pikamoonBody__img}>
            {!isMobile ? (
              <ImgWebp
                src={PikamoonImg}
                src2x={PikamoonImg2x}
                srcWebp={PikamoonImgWebp}
              />
            ) : (
              <ImgWebp
                src={PikamoonImgMobile}
                src2x={PikamoonImgMobile2x}
                srcWebp={PikamoonImgMobileWebp}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
