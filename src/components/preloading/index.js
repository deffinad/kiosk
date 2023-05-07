import React from 'react'
import { motion } from 'framer-motion'

export const PreLoading = ({ title }) => {
    return (
        <div
            style={{ width: '100%', height: '100vh', backgroundColor: '#00923f', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <motion.h1
                initial={{ scale: 5, opacity: 0 }}
                animate={{ scale: 2, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ color: '#fff' }}
            >
                {title}
            </motion.h1>
        </div>
    )
}
