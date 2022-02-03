import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'

const Category = ({ open, toggle }) => {
    return (
        <div className='demo-inline-spacing'>
            <Offcanvas direction="start" isOpen={open} toggle={toggle}>
                <OffcanvasHeader toggle={toggle}>Menu</OffcanvasHeader>
                <OffcanvasBody>
                    Hello
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default Category