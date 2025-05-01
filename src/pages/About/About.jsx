import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutChef1Img from '../../utils/images/about-chef1-img.jpg';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Reviews from '../../components/Reviews/Reviews';

function About() {
  return (
    <div className='about-page'>
      <header className='height-50 mt-5'>
        <motion.div 
          className="container h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>Biz haqimizda</h1>
        </motion.div>
      </header>

      <div className="container my-5">
        <div className="row">
          <motion.div 
            className="col-lg-6 d-flex flex-column justify-content-center mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p>Londondagi Evosga xush kelibsiz, maxsus odamlar uchun ajoyib tajriba. Bizning hashamatli restoranimiz sizning maxsus daqiqalaringizni boshqa darajaga olib chiqadi.</p>
            <p>Restoranimiz poezd vokzalidan va savdo markazidan 5 daqiqalik piyoda masofada joylashgan. Bu joy mukammal nonushta, ajoyib tushlik yoki oilangiz yoki do'stlaringiz bilan yoqimli kechki ovqat uchun ideal. Sizga mazali taomlarimizni taqdim etishni kuta olmaymiz!</p>
            <Link to='/contact'>
              <button type='button' className='btn btn-success btn-lg rounded-0 text-capitalize mt-3 shadow'>Biz bilan bog'laning</button>
            </Link>
          </motion.div>
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={AboutChef1Img} className='img-fluid' alt="our staff" />
          </motion.div>
        </div>
      </div>

      <div className="bg-dark text-light py-1">
        <ImageGallery />
      </div>

      <div className="my-5">
        <Reviews />
      </div>
    </div>
  )
}

export default About;