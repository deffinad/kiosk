import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../navbar';
import { Navigate, useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigation = useNavigate()
    return (
        <motion.div
            initial={{ width: 0, borderTopRightRadius: '50%', borderBottomRightRadius: '50%' }}
            animate={{ width: '100%', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            transition={{ duration: 1 }}
            className='menu'>
            <Navbar theme={'light'} activeMenu={true} />
            <div className='content'>
                <ul>
                    <motion.li
                        initial={{ opacity: 0, translateX: -200 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1, delay: 1 }}>
                        <a onClick={() => navigation('/', { replace: true })}>
                            Home
                        </a>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, translateX: -200 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}>Fasilitas & Pelayanan</motion.li>
                    <motion.li
                        initial={{ opacity: 0, translateX: -200 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1, delay: 2 }}>List Pasien</motion.li>
                    <motion.li
                        initial={{ opacity: 0, translateX: -200 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1, delay: 2.5 }}>
                        <a onClick={() => navigation('/listdokter')}>
                            Jadwal Dokter
                        </a>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, translateX: -200 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1, delay: 3 }}>Tentang Kami</motion.li>
                </ul>
            </div>

        </motion.div>
    )
}

export default Menu;