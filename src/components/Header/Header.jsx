import React from 'react';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
import MenuBtn from '../MenuBtn/MenuBtn';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <Carousel className='carousel-fade mt-5 mt-sm-0'>
            <Carousel.Item className='carousel-item1 vh-100'>
                <Carousel.Caption className='h-100 pb-0'>
                    <div className="row h-100">
                        <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                            <h2 className='fw-bold fs-3 text-center text-md-start'>Xush kelibsiz</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Evos</h1>
                            <p className='mb-4 text-center text-md-start'>Londondagi Evosga xush kelibsiz, maxsus odamlar uchun ajoyib tajriba. Bizning hashamatli restoranimiz sizning maxsus daqiqalaringizni boshqa darajaga olib chiqadi.</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact'>
                                    <button type='button' className='btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow'>Contact us</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-5 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item2 vh-100'>
                <Carousel.Caption className='h-100 pb-0'>
                    <div className="row h-100">
                        <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                            <h2 className='fw-bold fs-3 text-center text-md-start'>Xush kelibsiz</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Evos</h1>
                            <p className='mb-4 text-center text-md-start'>Londondagi Evosga xush kelibsiz, maxsus odamlar uchun ajoyib tajriba. Bizning hashamatli restoranimiz sizning maxsus daqiqalaringizni boshqa darajaga olib chiqadi.</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact'>
                                    <button type='button' className='btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow'>Biz bilan bog'lanish</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-5 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item3 vh-100'>
                <Carousel.Caption className='h-100 pb-0'>
                    <div className="row h-100">
                        <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                            <h2 className='fw-bold fs-3 text-center text-md-start'>Evos</h2>
                            <h1 className='text-capitalize fw-bold text-center text-md-start'>Evos</h1>
                            <p className='mb-4 text-center text-md-start'>Londondagi Evosga xush kelibsiz, maxsus odamlar uchun ajoyib tajriba. Bizning hashamatli restoranimiz sizning maxsus daqiqalaringizni boshqa darajaga olib chiqadi.</p>
                            <div className='d-flex flex-column flex-sm-row'>
                                <MenuBtn />
                                <Link to='/contact'>
                                    <button type='button' className='btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow'>Biz bilan bog'lanish</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-5 d-none d-xl-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </header>
  )
}

export default Header;