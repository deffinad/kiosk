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

const Home = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

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

                          <p>DR. dr. H. Aceng Solahudin Ahmad, M.Kes 2019 -- sekarang</p>
                          <span>
                            “Sudah selayaknya kami memberikan pelayanan terbaik khususnya
                            dalam bidang kesehatan untuk Masyarakat Kab. Sumedang”
                          </span>
                        </div>
                      </div>
                    </section>
                  </FullpageSection>

                  <FullpageSection>
                    <section className="doctor">
                      <img src={Waves4} className="waves-four" />
                      <div className="container">
                        <div className="description">
                          <div className="text-header">
                            <span className="text-one">Direktur</span>
                            <span className="text-two">
                              RSUD <span className="text-three">SUMEDANG</span>
                            </span>
                          </div>

                          <p>Dr. Syachrul Ardiansyah</p>
                          <p>Poli Anak</p>
                          <p>
                            RSUD Kab. Sumedang adalah rumah sakit umum milik Pemerintah
                            Daerah Kabupaten Sumedang, Jawa Barat, Indonesia yang terletak
                            di ibu kota kabupaten Sumedang Rumah sakit ini merupakan salah
                            satu dari tiga rumah sakit di kabupaten Sumedang (dua
                            diantaranya Rumah Sakit Swasta)
                          </p>
                        </div>

                        <div className="image">
                          <img src={Doctor} alt="Dokter" />
                        </div>
                      </div>
                    </section>
                  </FullpageSection>
                </FullPageSections>
              </Fullpage>
            </Navbar>
          </>
        )
      }
    </div>
  );
};

export default Home;
