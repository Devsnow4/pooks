import style from './Ticker.module.scss';
import Marquee from 'react-fast-marquee';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// svg imports
import StarSvg from '@assets/img/icons/starSvg';

const Ticker = () => {
  const { t } = useTranslation();
  const location = useLocation();

  if (location.pathname !== '/buy' && location.pathname !== '/buy-elrond') {
    return (
      <Link to={'giveaway'} className={style.ticker}>
        <Marquee speed={100} gradient={false}>
          <span>
            {t('ticker.text')} <StarSvg />
          </span>
          <span>
            {t('ticker.text')} <StarSvg />
          </span>
          <span>
            {t('ticker.text')} <StarSvg />
          </span>
          <span>
            {t('ticker.text')} <StarSvg />
          </span>
        </Marquee>
      </Link>
    );
  } else {
    return;
  }
};

export default Ticker;
