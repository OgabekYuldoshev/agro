// ** React Imports
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Button } from 'reactstrap'

// ** Custom Hooks
// import { useSkin } from '@hooks/useSkin'

// ** Styles
import '@styles/base/pages/page-misc.scss'

const Error = () => {
  // ** Hooks
  // const { skin } = useSkin()

  const illustration = 'error.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default
  return (
    <div className='misc-wrapper'>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <img className='img-fluid mb-1' src={source} alt='Not authorized page' />
          <h2 className='mb-1'>{t('page_not_found')} 🕵🏻‍♀️</h2>
          <p className='mb-2'>{t('oops_bad_request')}</p>
          <Button tag={Link} to='/' color='primary' className='btn-sm-block mb-2'>
            {t('back_to_home')}
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Error
