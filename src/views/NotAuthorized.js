// ** React Imports
import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { handleAuthModal } from "@store/Auth"

const NotAuthorized = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  return (
    <div className='misc-wrapper'>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <img className='mb-2' width={250} src={require(`@src/assets/images/site/security.svg`).default} alt='Not authorized page' />
          <h2 className='mb-1'>{t('not_authorized')}🔐</h2>
          <p className='mb-2'>
            {t('webtrends_marketing')}
          </p>
          <div className='d-flex align-items-center gap-2 justify-content-center'>
            <Button tag={Link} to='/' outline color='primary' className='btn-sm-block mb-1'>
              {t('back_to_home')}
            </Button>
            <Button color='primary' onClick={() => dispatch(handleAuthModal(true))} className='btn-sm-block mb-1'>
              {t('login')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NotAuthorized
