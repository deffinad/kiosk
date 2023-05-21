import Navbar from "../../components/navbar";
import BgDoctor from "./../../assets/bgdoctor.png";
import Doctor from "./../../assets/doctor.png";
import Director from "./../../assets/director.png";
import Waves1 from "./../../assets/waves1.svg";
import Waves2 from "./../../assets/waves2.svg";
import Waves3 from "./../../assets/waves3.svg";
import Waves4 from "./../../assets/waves4.svg";
import About1 from "./../../assets/about1.png";
import About2 from "./../../assets/about2.png";
import About3 from "./../../assets/about3.png";
import About4 from "./../../assets/about4.png";
import Button from "../../components/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PreLoading } from "../../components/preloading";
import Fullpage, { FullPageSections, FullpageNavigation, FullpageSection } from "@ap.cx/react-fullpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const dataDoctor = [
  {
    id: 1,
    name: 'Dr. Syahcrul Ardiansyah',
    poli: 'Poli Anak',
    description: "Fugiat nulla ea laborum sunt anim eu. Reprehenderit laboris reprehenderit deserunt fugiat laboris nisi dolore mollit. Consequat ipsum laborum aliquip amet voluptate ipsum fugiat. Fugiat proident ut in anim irure commodo ea cillum dolore tempor consectetur ex nisi ipsum.",
    image: Doctor
  },
  {
    id: 2,
    name: 'Dr. Deffin Achmaddifa',
    poli: 'Poli Jantung',
    description: "Fugiat nulla ea laborum sunt anim eu. Reprehenderit laboris reprehenderit deserunt fugiat laboris nisi dolore mollit. Consequat ipsum laborum aliquip amet voluptate ipsum fugiat. Fugiat proident ut in anim irure commodo ea cillum dolore tempor consectetur ex nisi ipsum.",
    image: Doctor
  },
  {
    id: 3,
    name: 'Dr. Phonteka Vivaldi',
    poli: 'Poli Anak',
    description: "Fugiat nulla ea laborum sunt anim eu. Reprehenderit laboris reprehenderit deserunt fugiat laboris nisi dolore mollit. Consequat ipsum laborum aliquip amet voluptate ipsum fugiat. Fugiat proident ut in anim irure commodo ea cillum dolore tempor consectetur ex nisi ipsum.",
    image: Doctor
  }
]
const Home = () => {
  const [loading, setLoading] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState(1)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const handleNextDoctor = () => {
    const count = dataDoctor.length
    selectedDoctor === count ? setSelectedDoctor(1) : setSelectedDoctor(selectedDoctor + 1)
  }

  const handlePrevDoctor = () => {
    selectedDoctor === 1 ? setSelectedDoctor(dataDoctor.length) : setSelectedDoctor(selectedDoctor - 1)
  }

  return (
    <div>
      {
        loading ? (
          <PreLoading title={'Home'} />
        ) : (
          <>
            <Navbar>
              <Fullpage>
                <FullpageNavigation />
                <FullPageSections>
                  <FullpageSection>
                    <section className="hero">
                      <div className="description">
                        <span className="text-one">RSUD SUMEDANG</span>
                        <span className="text-two">
                          Memberikan Pelayanan Terbaik Untuk Masyarakat
                        </span>
                        <span className="text-three">
                          Sebagai layanan dasar dari visi misi pemerintah kami berusaha
                          memberikan pelayanan yang terbaik.
                        </span>
                      </div>

                      <div className="image">
                        <img src={BgDoctor} alt="Gambar Hero Dokter" />
                      </div>
                    </section>
                  </FullpageSection>

                  <FullpageSection>
                    <section className="about">
                      <img src={Waves1} className="waves-one" />
                      <div className="container">
                        <div className="image">
                          <div className="column">
                            <img src={About1} alt="Gambar About 1" />
                            <img src={About2} alt="Gambar About 2" />
                          </div>
                          <div className="column">
                            <div className="text-header">
                              <span className="text-one">Tentang</span>
                              <span className="text-two">
                                RSUD <span className="text-three">SUMEDANG</span>
                              </span>
                            </div>
                            <img src={About3} alt="Gambar About 3" />
                            <img src={About4} alt="Gambar About 4" />
                          </div>
                        </div>

                        <motion.div className="description">
                          <p>
                            RSUD Kab. Sumedang adalah rumah sakit umum milik Pemerintah
                            Daerah Kabupaten Sumedang, Jawa Barat, Indonesia yang terletak
                            di ibu kota kabupaten Sumedang Rumah sakit ini merupakan salah
                            satu dari tiga rumah sakit di kabupaten Sumedang (dua
                            diantaranya Rumah Sakit Swasta)
                          </p>

                          <p>
                            Berdasarkan SK Menteri Kesehatan Nomor 150/Menkes/SK/X/2003
                            tanggal 27 Oktober 2003, dan ditetapkan oleh SK Bupati Sumedang
                            Nomor 445/Kep.270- RSUD/2003 pada tanggal 3 Desember 2003 RSU
                            Unit Swadana Daerah Kabupaten statusnya berubah menjadi RS Tipe
                            B Non Pendidikan.
                          </p>

                          <Button label={"Lihat Fasilitas"} />
                        </motion.div>
                      </div>
                    </section>
                  </FullpageSection>

                  <FullpageSection>
                    <section className="director">
                      <img src={Waves2} className="waves-two" />
                      <img src={Waves3} className="waves-three" />
                      <div className="container">
                        <div className="image">
                          <img src={Director} alt="Gambar Direktur" />
                        </div>
                        <div className="description">
                          <div className="text-header">
                            <span className="text-one">Direktur</span>
                            <span className="text-two">
                              RSUD <span className="text-three">SUMEDANG</span>
                            </span>
                          </div>

                          <div className="text-content">
                            <p className="name">DR. dr. H. Aceng Solahudin Ahmad, M.Kes 2019 -- sekarang</p>
                            <span className="desc">
                              “Sudah selayaknya kami memberikan pelayanan terbaik khususnya
                              dalam bidang kesehatan untuk Masyarakat Kab. Sumedang”
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </FullpageSection>

                  <FullpageSection>
                    <section className="doctor">
                      <img src={Waves4} className="waves-four" />
                      <div className="container">

                        {
                          dataDoctor.map((value) => (
                            value.id === selectedDoctor ? (
                              <>
                                <div className="description" key={value.id}>
                                  <div className="text-header">
                                    <span className="text-one">Dokter </span>
                                    <span className="text-two">
                                      RSUD <span className="text-three">SUMEDANG</span>
                                    </span>
                                  </div>

                                  <motion.div
                                    initial={{ opacity: 0, translateX: -100 }}
                                    animate={{ opacity: 1, translateX: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className="text-content">
                                    <p className="name">{value.name}</p>
                                    <p className="poli">{value.poli}</p>
                                    <p className="desc">
                                      {value.description}
                                    </p>
                                  </motion.div>

                                  <div className="button-group">
                                    <button className="btnPrev" onClick={handlePrevDoctor}>
                                      <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                                    </button>
                                    <button className="btnNext" onClick={handleNextDoctor}>
                                      <FontAwesomeIcon icon={faArrowRight} size="2x" />
                                    </button>
                                  </div>

                                </div>

                                <motion.div
                                  initial={{ opacity: 0, translateX: 100 }}
                                  animate={{ opacity: 1, translateX: 0 }}
                                  transition={{ duration: 0.7 }}
                                  className="image">
                                  <img src={value.image} alt="Dokter" />
                                </motion.div>
                              </>
                            ) : null
                          ))
                        }

                      </div>
                    </section>
                  </FullpageSection>
                </FullPageSections>
              </Fullpage>
            </Navbar>
          </>
        )
      }
    </div >
  );
};

export default Home;
