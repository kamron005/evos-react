import React from 'react';
import { motion } from 'framer-motion';

function ContactInfo() {
  return (
    <motion.div 
      className='d-flex flex-column align-items-center'
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
        <h2 className='fs-1 mb-3 text-uppercase fw-bold'>Bizni qayerdan topish mumkin</h2>
        <p className='mb-5'>
        47 Beyker ko'chasi</p>
        <h3 className='text-capitalize'>Ish vaqti</h3>
        <p className="m-0">Dush - Juma: 09:00 - 17:00</p>
        <p className="m-0">Shanba - Yakshanba: 10:00 - 15:00</p>
    </motion.div>
  )
}

export default ContactInfo;