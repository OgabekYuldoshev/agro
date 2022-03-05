import { useState } from 'react'
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Accordion, AccordionBody, AccordionHeader, AccordionItem, ListGroup, ListGroupItem } from 'reactstrap'
import { useSelector } from "react-redux"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Category = ({ t, open, toggle }) => {
    const { categories, pages } = useSelector(state => state.app)
    const { i18n } = useTranslation()
    const [accardion, setAccardion] = useState('')
    const about = pages?.filter(p => parseInt(p.page_id) === 1)
    const service = pages?.filter(p => parseInt(p.page_id) === 2)
    const useful = pages?.filter(p => parseInt(p.page_id) === 3)

    const toggleAccardion = id => {
        accardion === id ? setAccardion() : setAccardion(id)
    }

    return (
        <div className='demo-inline-spacing'>
            <Offcanvas direction="start" isOpen={open} toggle={toggle}>
                <OffcanvasHeader toggle={toggle} className="h2">{t('menu')}</OffcanvasHeader>
                <OffcanvasBody>

                    <Accordion className='accordion-margin' open={accardion} toggle={toggleAccardion}>
                        <AccordionItem>
                            <AccordionHeader targetId='3'>{t('about')}</AccordionHeader>
                            <AccordionBody accordionId='3'>
                                <ListGroup flush>
                                    {
                                        about?.map((item, index) => (
                                            <ListGroupItem key={index}>
                                                <Link to={`/page/${item?.id}`}>
                                                    {item[`title_${i18n.language}`]}
                                                </Link>
                                            </ListGroupItem>
                                        ))
                                    }
                                    <ListGroupItem>
                                        <Link to={'/partners'}>
                                            {t('partners')}
                                        </Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId='1'>{t('category')}</AccordionHeader>
                            <AccordionBody accordionId='1'>
                                <ListGroup flush>
                                    {
                                        categories?.map((item, index) => (
                                            <ListGroupItem key={index}>
                                                <Link to={`/category/${item?.id}`}>
                                                    {item[`name_${i18n.language}`]}
                                                </Link>
                                            </ListGroupItem>
                                        ))
                                    }
                                </ListGroup>
                            </AccordionBody>
                        </AccordionItem>
                        {
                            service?.length ? (
                                <AccordionItem>
                                    <AccordionHeader targetId='2'>{t('our_services')}</AccordionHeader>
                                    <AccordionBody accordionId='2'>
                                        {
                                            service?.map((item, index) => (
                                                <ListGroupItem key={index}>
                                                    <Link to={`/page/${item?.id}`}>
                                                        {item[`title_${i18n.language}`]}
                                                    </Link>
                                                </ListGroupItem>
                                            ))
                                        }
                                    </AccordionBody>
                                </AccordionItem>
                            ) : null
                        }
                        {
                            useful?.length ? (
                                <AccordionItem>
                                    <AccordionHeader targetId='6'>{t('useful_links')}</AccordionHeader>
                                    <AccordionBody accordionId='6'>
                                        <ListGroup flush>
                                            {
                                                useful?.map((item, index) => (
                                                    <ListGroupItem key={index}>
                                                        <Link to={`/page/${item?.id}`}>
                                                            {item[`title_${i18n.language}`]}
                                                        </Link>
                                                    </ListGroupItem>
                                                ))
                                            }
                                        </ListGroup>
                                    </AccordionBody>
                                </AccordionItem>
                            ) : null
                        }
                        <AccordionItem>
                            <AccordionHeader targetId='4'>{t('media')}</AccordionHeader>
                            <AccordionBody accordionId='4'>
                                <ListGroup flush>
                                    <ListGroupItem>
                                        <Link to={'/media'}>
                                            {t('gallery')}
                                        </Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader targetId='null'>
                                <Link to={'/contacts'}>{t('network')}</Link>
                            </AccordionHeader>
                        </AccordionItem>
                    </Accordion>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default Category