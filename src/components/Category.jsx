import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'

const Category = ({t, open, toggle }) => {
    return (
        <div className='demo-inline-spacing'>
            <Offcanvas direction="start" isOpen={open} toggle={toggle}>
                <OffcanvasHeader toggle={toggle}>{t('menu')}</OffcanvasHeader>
                <OffcanvasBody>
                    Hello
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default Category