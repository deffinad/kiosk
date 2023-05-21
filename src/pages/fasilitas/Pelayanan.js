import React, { useEffect, useState } from 'react'
import fp1 from '../../assets/fp1.png'
import fp2 from '../../assets/fp2.png'
import fp3 from '../../assets/fp3.png'
import waves from '../../assets/waves5.svg'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { PreLoading } from '../../components/preloading'

const dataPelayanan = [
    {
        id: 1,
        name: 'Rawat Jalan',
        description: 'Rawat jalan merupakan pelayanan medis kepada seorang pasien untuk tujuan pengamatan, diagnosis, pengobatan, rehabilitasi, dan pelayanan kesehatan lainnya, tanpa mengharuskan pasien tersebut di rawat inap.',
        image: fp1
    },
    {
        id: 2,
        name: 'Rawat Inap',
        description: 'Instalasi Rawat Inap yang terdiri dari beberapa ruang perawatan meliputi: Perawatan Penyakit Dalam, Perawatan Penyakit Anak, Perawatan Penyakit Bedah, Perawatan Penyakit Kebidanan dan Kandungan',
        image: fp2
    },
    {
        id: 3,
        name: 'Gawat Darurat',
        description: 'Instalasi Gawat Darurat (IGD) adalah bagian terdepan dan sangat berperan di Rumah Sakit, baik buruknya pelayanan bagian ini akan memberi kesan secara menyeluruh terhadap pelayanan rumah sakit.',
        image: fp3
    },
]
const Pelayanan = () => {

    const [loading, setLoading] = useState(false)
    const [selectedPelayanan, setSelectedPelayanan] = useState(1)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    const handleNextDoctor = () => {
        const count = dataPelayanan.length
        selectedPelayanan === count ? setSelectedPelayanan(1) : setSelectedPelayanan(selectedPelayanan + 1)
    }

    const handlePrevDoctor = () => {
        selectedPelayanan === 1 ? setSelectedPelayanan(dataPelayanan.length) : setSelectedPelayanan(selectedPelayanan - 1)
    }

    return (
        <div>
            {
                loading ? (
                    <PreLoading title={'Fasilitas Pelayanan'} />
                ) : (
                    <>
                        <section className='pelayanan'>
                            <div className='container'>
                                {
                                    dataPelayanan.map((item) => (
                                        selectedPelayanan === item.id ? (
                                            <>
                                                <img src={waves} className='waves' alt='waves' />
                                                <motion.img
                                                    initial={{ opactiy: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.7 }}
                                                    src={item.image}
                                                    className='bg'
                                                    alt='backgorund fasilitas pelayanan'
                                                />

                                                <div className='description'>
                                                    <motion.span
                                                        initial={{ opacity: 0, translateY: -50 }}
                                                        animate={{ opacity: 1, translateY: 0 }}
                                                        transition={{ duration: 0.7 }}
                                                        className='number'
                                                    >
                                                        {'0' + item.id}
                                                    </motion.span>

                                                    <motion.span
                                                        initial={{ opacity: 0, translateX: -50 }}
                                                        animate={{ opacity: 1, translateX: 0 }}
                                                        transition={{ duration: 0.7 }}
                                                        className='name'
                                                    >
                                                        {item.name}
                                                    </motion.span>

                                                    <motion.span
                                                        initial={{ opacity: 0, translateX: 50 }}
                                                        animate={{ opacity: 1, translateX: 0 }}
                                                        transition={{ duration: 0.7 }}
                                                        className='desc'
                                                    >
                                                        {item.description}
                                                    </motion.span>


                                                </div >
                                            </>

                                        ) : null
                                    ))
                                }
                                <div className="button-group" style={{ position: 'absolute', right: 20, bottom: 20, zIndex: 3 }}>
                                    <button className="btnPrev" onClick={handlePrevDoctor} style={{ borderColor: 'white', color: '#0e204d', backgroundColor: 'white' }}>
                                        <FontAwesomeIcon icon={faArrowLeft} size='2x' />
                                    </button>
                                    <button className="btnNext" onClick={handleNextDoctor} style={{ borderColor: 'white', color: '#0e204d', backgroundColor: 'white' }}>
                                        <FontAwesomeIcon icon={faArrowRight} size='2x' />
                                    </button>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        </div>
    )
}

export default Pelayanan
