import style from "./UpButton.module.scss"

// svg imports
import UpSvg from '@assets/img/icons/upSvg';

const UpButton = ({ className, isDisable = false, ...props }) => {
  const toUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div onClick={toUp} className={`${style.btn} ${className} ${isDisable ? style.disable : ''}`}>
      <UpSvg />
    </div>
  )
}

export default UpButton