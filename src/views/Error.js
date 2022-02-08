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
          <h2 className='mb-1'>Page Not Found 🕵🏻‍♀️</h2>
          <p className='mb-2'>Oops! 😖 The requested URL was not found on this server.</p>
          <Button tag={Link} to='/' color='primary' className='btn-sm-block mb-2'>
            Back to home
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Error
