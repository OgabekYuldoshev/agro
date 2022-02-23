import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'
import { useTranslation } from 'react-i18next'

const Filter = ({ open, toggle }) => {
    const { t } = useTranslation()
    return (
        <div className='demo-inline-spacing'>
            <Offcanvas direction="end" isOpen={open} toggle={toggle}>
                <OffcanvasHeader toggle={toggle} className="h2">{t('filter')}</OffcanvasHeader>
                <OffcanvasBody>
                    hello
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default Filter