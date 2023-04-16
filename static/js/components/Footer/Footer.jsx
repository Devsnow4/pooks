import style from './Footer.module.scss';
import Button from '../Button/Button';
import UpButton from '../UpButton/UpButton';
import { useMediaQuery } from 'usehooks-ts';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// img and svg imports
import logoPng from '@assets/img/header/footer_logo.png';
import TwitterSvg from '../../assets/img/social/twitterSvg';
import TelegramSvg from '@assets/img/social/telegramSvg';
import InstagramSvg from '@assets/img/social/instagramSvg';
import DiscordSvg from '@assets/img/social/discordSvg';
import LinktreeSvg from '@assets/img/social/linktreeSvg';
import SocialLink from '../SocialLink/SocialLink';

const Footer = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const { t } = useTranslation();
  const location = useLocation();

  // const [isValidate, setIsValidate] = useState(false)
  const [isErr, setIsErr] = useState(false);
  const [emailSend, setEmailSend] = useState(false);

  const toPage = (page) => {
    window.scrollTo({
      top: 0,
      left: 0,
      duration: 100,
      behavior: 'smooth',
    });
    return navigate(`${page}`);
  };

  const scrollToSection = (section) => {
    const item = document.querySelector(`#${section}`);

    const elementPosition = item.getBoundingClientRect().top;
    const offsetPosition = elementPosition - 150;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;

    const emailValidate = email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (emailValidate) {
      setEmailSend(true);

      let params = new URLSearchParams();
      params.set(
        'xnQsjsdp',
        'd1b6925747280f96030cbc7029b3f8ad5efb5fec7e1fa16f95d7fc631320d0c7'
      );
      params.set('zc_gad', '');
      params.set(
        'xmIwtLD',
        'bc06881570df60a97f80e602d23e8ac80981a480ab10e1eafa85f81e27d65d6c'
      );
      params.set('actionType', 'TGVhZHM=');
      params.set(
        'returnURL',
        'https&#x3a;&#x2f;&#x2f;pikamoon.notequal.website&#x2f;'
      );
      params.set('zcvers', '2.0');
      params.set('Last Name', 'Pikamoon Subscribe');
      params.set('Email', email);
      params.set('zcld', '11bc919e97f87ca1');
      params.set('zctd', '');
      params.set('zc_trackCode', 'ZCFORMVIEW');
      params.set(
        'zc_formIx',
        '3z71a8517667c43e4ec85ff433de0e9691f4c51f3d0fcc2e9944f66845ac53cb1f'
      );
      params.set('scriptless', 'yes');
      const options = {
        method: 'POST',
        body: params,
      };
      fetch('https://crm.zoho.eu/crm/WebToLeadForm', options).then((response) =>
        console.log('0000000000000', response)
      );

      setTimeout(() => {
        setEmailSend(false);
      }, 10000);

      checkMandatory526047000000396001();
    } else {
      setIsErr(true);
      setEmailSend(false);
    }
  };

  const validateEmail526047000000396001 = () => {
    let form = document.forms['WebToLeads526047000000396001'];
    let emailFld = form.querySelectorAll('[ftype=email]');
    let i;
    for (i = 0; i < emailFld.length; i++) {
      let emailVal = emailFld[i].value;
      if (emailVal.replace(/^\s+|\s+$/g, '').length != 0) {
        let atpos = emailVal.indexOf('@');
        let dotpos = emailVal.lastIndexOf('.');
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
          alert('Please enter a valid email address. ');
          emailFld[i].focus();
          return false;
        }
      }
    }
    return true;
  };

  const checkMandatory526047000000396001 = () => {
    let mndFileds = new Array('Last Name');
    let fldLangVal = new Array('Last\x20Name');
    for (let i = 0; i < mndFileds.length; i++) {
      let fieldObj =
        document.forms['WebToLeads526047000000396001'][mndFileds[i]];
      if (fieldObj) {
        if (fieldObj.value.replace(/^\s+|\s+$/g, '').length == 0) {
          if (fieldObj.type == 'file') {
            alert('Please select a file to upload.');
            fieldObj.focus();
            return false;
          }
          alert(fldLangVal[i] + ' cannot be empty');
          fieldObj.focus();
          return false;
        } else if (fieldObj.nodeName == 'SELECT') {
          if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
            alert(fldLangVal[i] + ' cannot be none');
            fieldObj.focus();
            return false;
          }
        } else if (fieldObj.type == 'checkbox') {
          if (fieldObj.checked == false) {
            alert('Please accept  ' + fldLangVal[i]);
            fieldObj.focus();
            return false;
          }
        }
        try {
          if (fieldObj.name == 'Last Name') {
            fieldObj.name = fieldObj.value;
          }
        } catch (e) {}
      }
    }
    if (!validateEmail526047000000396001()) {
      return false;
    }
    document
      .querySelector('.crmWebToEntityForm .formsubmit')
      .setAttribute('disabled', true);
  };

  if (!isMobile) {
    return (
      <footer className={style.footer}>
        <div className='container'>
          <div className={style.footerBody}>
            <div className={style.footerRow}>
              <div className={style.footer__logo}>
                <img src={logoPng} alt='' />
              </div>
              <div
                className={`
              ${style.formSuccess} 
              ${emailSend ? style._show : ''}
              `}
              >
                <div className={style.formSuccess__title}>
                  {t('footer.form.congratulations')}
                </div>
                <div className={style.formSuccess__subtitle}>
                  {t('footer.form.success')}
                </div>
              </div>
              <form
                onSubmit={submitForm}
                className={`
                ${style.footer__subscribe} 
                ${emailSend ? style._hidden : ''}
                `}
              >
                {isErr ? (
                  <span className={style.err}>{t('footer.form.error')}</span>
                ) : (
                  ''
                )}
                <input
                  onInput={() => {
                    setIsErr(false);
                  }}
                  id='email'
                  className={`
                ${style.footer__subscribeInput} 
                ${isErr ? style._err : ''}
                      `}
                  type='text'
                  placeholder={t('footer.form.placeholder')}
                />
                <Button
                  title={t('footer.form.subscribe')}
                  className={`${style.footer__subscribeBtn} formsubmit zcwf_button`}
                />
              </form>
              <UpButton className={style.footer__up} />
            </div>
            <div className={style.footerRow}>
              <div className={style.footerCol}>
                {location.pathname !== '/help' ? (
                  <div className={style.footerMenu}>
                    <Link to={'/'} className={style.footerMenu__item}>
                      {t('footer.menu.link01')}
                    </Link>
                    <Link to={'/'} className={style.footerMenu__item}>
                      {t('footer.menu.link02')}
                    </Link>
                    <Link to={'pikaverse'} className={style.footerMenu__item}>
                      {t('footer.menu.link03')}
                    </Link>
                    <Link to={'token'} className={style.footerMenu__item}>
                      {t('footer.menu.link04')}
                    </Link>
                    <Link to={'giveaway'} className={style.footerMenu__item}>
                      {t('footer.menu.link05')}
                    </Link>
                    <a
                      href='https://docs.pikamoon.io'
                      target={'_blank'}
                      className={style.footerMenu__item}
                    >
                      {t('footer.menu.link06')}
                    </a>
                    <a
                      href='https://www.sharkteam.org/report/audit/20230404002C_en.pdf'
                      target={'_blank'}
                      className={style.footerMenu__item}
                    >
                      {t('footer.menu.link07')}
                    </a>
                  </div>
                ) : (
                  <div className={style.footerMenu}>
                    <div
                      onClick={() => scrollToSection('phase1')}
                      className={style.footerMenu__item}
                    >
                      PHASE 1
                    </div>
                    <div
                      onClick={() => scrollToSection('presale')}
                      className={style.footerMenu__item}
                    >
                      PRESALE
                    </div>
                    <div
                      onClick={() => scrollToSection('how')}
                      className={style.footerMenu__item}
                    >
                      HOW TO BUY
                    </div>
                    <div
                      onClick={() => scrollToSection('purchase')}
                      className={style.footerMenu__item}
                    >
                      PURCHASE
                    </div>
                    <div
                      onClick={() => scrollToSection('question')}
                      className={style.footerMenu__item}
                    >
                      QUESTIONS
                    </div>
                  </div>
                )}

                <div className={style.footerBottom}>
                  <div className={style.footerLinks}>
                    <div
                      onClick={() => toPage('privacy')}
                      className={style.footerLinks__item}
                    >
                      {t('footer.privacy')}
                    </div>
                    <div
                      onClick={() => toPage('policy')}
                      className={style.footerLinks__item}
                    >
                      {t('footer.terms')}
                    </div>
                  </div>
                  <div className={style.footer__cr}>{t('footer.cr')}</div>
                  <div className={style.footerSocial}>
                    <SocialLink
                      className={style.footerSocial__item}
                      linkTo='https://twitter.com/pikamooncoin'
                      icon={<TwitterSvg />}
                    />
                    <SocialLink
                      className={style.footerSocial__item}
                      linkTo='https://t.me/pikamooncoins'
                      icon={<TelegramSvg />}
                    />
                    <SocialLink
                      className={style.footerSocial__item}
                      linkTo='https://instagram.com/pikamooncoin_'
                      icon={<InstagramSvg />}
                    />
                    <SocialLink
                      className={style.footerSocial__item}
                      linkTo='https://discord.gg/QFHbbKQed9'
                      icon={<DiscordSvg />}
                    />
                    <SocialLink
                      className={style.footerSocial__item}
                      linkTo='https://linktr.ee/pikamoon'
                      icon={<LinktreeSvg />}
                    />
                  </div>
                </div>
              </div>
              <div className={style.footer__disclaimer}>
                <div className={`${style.footer__disclaimerTitle} text`}>
                  {t('footer.disclaimer.title')}
                </div>
                <div className={`${style.footer__disclaimerText} text`}>
                  {t('footer.disclaimer.text')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className={style.footer}>
        <div className='container'>
          <div className={style.footerBody}>
            <div className={style.footerRow}>
              <div className={style.footer__logo}>
                <img src={logoPng} alt='' />
              </div>
              <div className={style.footerSocial}>
                <SocialLink
                  className={style.footerSocial__item}
                  linkTo='https://twitter.com/pikamooncoin'
                  icon={<TwitterSvg />}
                />
                <SocialLink
                  className={style.footerSocial__item}
                  linkTo='https://t.me/pikamooncoins'
                  icon={<TelegramSvg />}
                />
                <SocialLink
                  className={style.footerSocial__item}
                  linkTo='https://instagram.com/pikamooncoin_'
                  icon={<InstagramSvg />}
                />
                <SocialLink
                  className={style.footerSocial__item}
                  linkTo='https://discord.gg/QFHbbKQed9'
                  icon={<DiscordSvg />}
                />
                <SocialLink
                  className={style.footerSocial__item}
                  linkTo='https://linktr.ee/pikamoon'
                  icon={<LinktreeSvg />}
                />
              </div>
              <UpButton className={style.footer__up} />
            </div>

            {location.pathname !== '/help' ? (
              <div className={style.footerMenu}>
                <div className={style.footerMenu__col}>
                  <Link to={'/'} className={style.footerMenu__item}>
                    {t('footer.menu.link01')}
                  </Link>
                  <Link to={'/'} className={style.footerMenu__item}>
                    {t('footer.menu.link02')}
                  </Link>
                  <Link to={'pikaverse'} className={style.footerMenu__item}>
                    {t('footer.menu.link03')}
                  </Link>
                  <Link to={'token'} className={style.footerMenu__item}>
                    {t('footer.menu.link04')}
                  </Link>
                </div>
                <div className={style.footerMenu__col}>
                  <Link to={'giveaway'} className={style.footerMenu__item}>
                    {t('footer.menu.link05')}
                  </Link>
                  <a
                    href='https://docs.pikamoon.io'
                    target={'_blank'}
                    className={style.footerMenu__item}
                  >
                    {t('footer.menu.link06')}
                  </a>
                  <a
                    href='https://www.sharkteam.org/report/audit/20230404002C_en.pdf'
                    target={'_blank'}
                    className={style.footerMenu__item}
                  >
                    {t('footer.menu.link07')}
                  </a>
                </div>
              </div>
            ) : (
              <div className={style.footerMenu}>
                <div className={style.footerMenu__col}>
                  <div
                    onClick={() => scrollToSection('phase1')}
                    className={style.footerMenu__item}
                  >
                    PHASE 1
                  </div>
                  <div
                    onClick={() => scrollToSection('presale')}
                    className={style.footerMenu__item}
                  >
                    PRESALE
                  </div>
                  <div
                    onClick={() => scrollToSection('how')}
                    className={style.footerMenu__item}
                  >
                    HOW TO BUY
                  </div>
                </div>
                <div className={style.footerMenu__col}>
                  <div
                    onClick={() => scrollToSection('purchase')}
                    className={style.footerMenu__item}
                  >
                    PURCHASE
                  </div>
                  <div
                    onClick={() => scrollToSection('question')}
                    className={style.footerMenu__item}
                  >
                    QUESTIONS
                  </div>
                </div>
              </div>
            )}

            <div
              className={`
              ${style.formSuccess} 
              ${emailSend ? style._show : ''}
              `}
            >
              <div className={style.formSuccess__title}>
                {t('footer.form.congratulations')}
              </div>
              <div className={style.formSuccess__subtitle}>
                {t('footer.form.success')}
              </div>
            </div>
            <form
              onSubmit={submitForm}
              className={`
            ${style.footer__subscribe}
            ${emailSend ? style._hidden : ''}
            `}
            >
              {isErr ? (
                <span className={style.err}>{t('footer.form.error')}</span>
              ) : (
                ''
              )}
              <input
                onInput={() => {
                  setIsErr(false);
                }}
                id='email'
                className={`
                ${style.footer__subscribeInput} 
                ${isErr ? style._err : ''}
                      `}
                type='text'
                placeholder={t('footer.form.placeholder')}
              />
              <Button
                title={t('footer.form.subscribe')}
                className={`${style.footer__subscribeBtn} formsubmit zcwf_button`}
              />
            </form>

            <div className={style.footer__disclaimer}>
              <div className={`${style.footer__disclaimerTitle} text`}>
                {t('footer.disclaimer.title')}
              </div>
              <div className={`${style.footer__disclaimerText} text`}>
                {t('footer.disclaimer.text')}
              </div>
            </div>
            <div className={style.footerBottom}>
              <div className={style.footerLinks}>
                <Link to={'privacy'} className={style.footerLinks__item}>
                  {t('footer.privacy')}
                </Link>
                <Link to={'policy'} className={style.footerLinks__item}>
                  {t('footer.terms')}
                </Link>
              </div>
              <div className={style.footer__cr}>{t('footer.cr')}</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
