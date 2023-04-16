import s from './SaleModal.module.scss'
import CloseSvg from '@assets/img/icons/closeSvg.js'
import { ImgWebp } from '../../helpers/imgwebp'

import bannerImg from '@assets/img/modal/banner.png'
import bannerImg2x from '@assets/img/modal/banner@2x.png'
import bannerImgWebp from '@assets/img/modal/banner.webp'
import { useDispatch, useSelector } from 'react-redux'
import { handleCloseModal } from '../../store/modalSlice'

const SaleModal = () => {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen)
  const isModalWasClosed = useSelector((state) => state.modal.isModalWasClosed)
  const dispatch = useDispatch()

  const closeModal = () => {
    const body = document.querySelector('body')
    dispatch(handleCloseModal())
    if (body.classList.contains('lock')) {
      body.classList.remove('lock')
    }
  }

  return (
    <div
      className={`${s.modal} ${isModalOpen ? s._active : ''} ${
        isModalWasClosed ? s._closed : ''
      }`}
    >
      <div className='container'>
        <div className={s.modalBody}>
          <div className={s.modalBody__img}>
            <ImgWebp
              src={bannerImg}
              src2x={bannerImg2x}
              srcWebp={bannerImgWebp}
            />
          </div>

          <div onClick={closeModal} className={s.modalBody__close}>
            <CloseSvg />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaleModal
