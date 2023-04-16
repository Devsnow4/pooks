import s from './Timer.module.scss';
import Countdown from 'react-countdown';
import StarSvg from '@assets/img/icons/starSvg';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { useDispatch } from 'react-redux';
import { handleOpenModal } from '../../store/modalSlice';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <div className={s.countdown}>NOW</div>;
  } else {
    return (
      <>
        <div className={s.countdown}>
          {days}D {hours}H {minutes}M {seconds}S
        </div>
      </>
    );
  }
};

const Timer = ({ className }) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const targetDate = new Date(1681664400 * 1000); // 16th april 5pm UTC
  const timer = useRef();
  const dispatch = useDispatch();

  const sticky = () => {
    if (window.innerWidth > 991) {
      if (window.scrollY >= 50) {
        timer.current.classList.add(s.sticky);
      } else {
        if (timer.current.classList.contains(s.sticky)) {
          timer.current.classList.remove(s.sticky);
        }
      }
    } else {
      if (window.scrollY >= 50) {
        timer.current.classList.add(s.sticky);
      } else {
        if (timer.current.classList.contains(s.sticky)) {
          timer.current.classList.remove(s.sticky);
        }
      }
    }
  };

  const openModal = () => {
    const body = document.querySelector('body');
    dispatch(handleOpenModal());
    body.classList.add('lock');
  };

  useEffect(() => {
    sticky();
    window.addEventListener('scroll', sticky);
  });

  return (
    <div ref={timer} className={`${s.timer} ${className}`}>
      <div className={s.timerBody}>
        <StarSvg />
        <span>
          $PIKA ICO LIVE IN {isMobile ? <br /> : ''}{' '}
          <Countdown date={targetDate} renderer={renderer} />
        </span>

        <a onClick={openModal} href='#'>
          view more
        </a>

        <StarSvg />
      </div>
    </div>
  );
};

export default Timer;
